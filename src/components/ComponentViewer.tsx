'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { decrementUserQuota } from '@/app/(frontend)/actions/quota';

export function ComponentViewer({
  title,
  description,
  code,
  iframeSrc,
  children
}: {
  title: string;
  description?: string;
  code: string;
  iframeSrc?: string;
  children?: React.ReactNode;
}) {
  const { data: session, update } = useSession();
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const user = session?.user as any;
  const isGuest = !user;
  const isFreeTier = user?.role === 'customer';

  const handleCopy = async () => {
    if (isGuest) {
      alert("Please sign in to copy components.");
      return;
    }

    if (isFreeTier) {
      const currentQuota = user.freeComponentQuota ?? 0;
      if (currentQuota <= 0) {
        alert("You have reached your limit of free components. Please upgrade to Pro.");
        return;
      }
      
      const confirmMessage = `You are using your free credentials (${currentQuota}/4 limits).\n\nClick OK to copy the code and use 1 credit. Remaining will be ${currentQuota - 1}/4.`;
      if (!window.confirm(confirmMessage)) {
        return;
      }
      
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      const res = await decrementUserQuota();
      if (res.success && res.newQuota !== undefined) {
        update({ freeComponentQuota: res.newQuota });
      }
    } else {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h2>
          {description && <p className="text-sm text-zinc-500">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Code
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 min-h-[400px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-950/50 relative">
        {activeTab === 'preview' ? (
          iframeSrc ? (
            <iframe src={iframeSrc} className="w-full h-full min-h-[500px] border-0 rounded-xl bg-transparent" title={title} />
          ) : (
            children
          )
        ) : (
          <div className="w-full h-full relative flex flex-col justify-center">
            {code ? (
              <>
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded text-xs font-semibold backdrop-blur-sm transition-all"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
                <pre className="p-4 rounded-xl bg-zinc-950 overflow-x-auto border border-zinc-800 text-zinc-300 text-sm h-full font-mono">
                  <code>{code}</code>
                </pre>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center h-full min-h-[300px]">
                <div className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Premium Component</h3>
                <p className="text-zinc-500 mb-6 max-w-md">You need to upgrade your subscription plan to view and copy the code for this component.</p>
                <a href="#pricing" className="bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Upgrade Plan
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
