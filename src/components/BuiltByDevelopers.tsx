import React from 'react'
import Link from 'next/link'

export function BuiltByDevelopers() {
  return (
    <section className="w-full flex flex-col border-b border-zinc-200/60 bg-white">
      <div className="max-w-3xl mx-auto w-full text-center py-20 px-8 md:px-16">
         <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-indigo-500 mb-4">
           Built by developers, for developers
         </h2>
         <p className="text-md text-zinc-500 font-medium">
           Built on React, Tailwind CSS, TypeScript, and modern headless UI, our components deliver top-tier performance, type safety, and absolute maintainability.
         </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-zinc-200/60 bg-white">
        {/* Card 1: Text top, graphic bottom */}
        <div className="flex flex-col pt-12 border-b md:border-r border-zinc-200/60 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           <div className="flex flex-col items-center text-center px-8 md:px-16">
             <h3 className="text-2xl font-semibold text-black mb-4">Styled with Tailwind CSS</h3>
             <p className="text-zinc-500 mb-6">
               Copy production-ready components with Tailwind CSS utility classes. Build beautiful, responsive interfaces instantly.
             </p>
             <Link href="/components" className="font-medium text-indigo-500 hover:text-indigo-600 flex items-center mb-8">
               Components <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </Link>
           </div>
           {/* Graphic bottom */}
           <div className="mt-auto w-full h-[240px] bg-white relative overflow-hidden transition-colors">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-white border-t border-x border-zinc-200/60 rounded-t-xl shadow-lg p-6 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 rounded-lg bg-indigo-50 border border-indigo-100/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                  <span className="text-sm font-mono font-medium text-indigo-600 bg-white px-3 py-1 rounded shadow-sm relative z-10 border border-indigo-100">text-indigo-500</span>
                </div>
             </div>
           </div>
        </div>

        {/* Card 2: Graphic top, text bottom */}
        <div className="flex flex-col border-b border-zinc-200/60 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           {/* Graphic top */}
           <div className="w-full h-[240px] bg-white relative overflow-hidden transition-colors mb-12">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-white border-b border-x border-zinc-200/60 rounded-b-xl shadow-lg flex items-center justify-center group-hover:translate-y-2 transition-transform duration-500">
                <div className="relative">
                  <div className="px-6 py-3 bg-black text-white rounded-lg text-sm font-semibold shadow-md">
                    Submit
                  </div>
                  <div className="absolute -inset-2 border-[3px] border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100"></div>
                  <div className="absolute -bottom-8 -right-8 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 -translate-y-2 group-hover:translate-y-0">Tab</div>
                </div>
             </div>
           </div>
           <div className="flex flex-col items-center text-center px-8 md:px-16 pb-12">
             <h3 className="text-2xl font-semibold text-black mb-4">Accessible by design</h3>
             <p className="text-zinc-500 mb-6">
               Based on semantic HTML and WAI-ARIA standards for full accessibility, including keyboard navigation and screen reader support.
             </p>
             <a href="#" className="font-medium text-indigo-500 hover:text-indigo-600 flex items-center">
               Documentation <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </a>
           </div>
        </div>

        {/* Card 3: Graphic top, text bottom */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-zinc-200/60 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           {/* Graphic top */}
           <div className="w-full h-[240px] bg-white relative overflow-hidden transition-colors mb-12 flex justify-center">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             <div className="absolute top-8 w-[80%] flex flex-col gap-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="flex items-start gap-3 w-4/5">
                  <div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <div className="w-full bg-white border border-zinc-200/60 rounded-xl rounded-tl-sm p-4 flex flex-col gap-2.5 shadow-sm">
                     <div className="w-full h-2 bg-zinc-100 rounded-full"></div>
                     <div className="w-5/6 h-2 bg-zinc-100 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-start gap-3 w-4/5 self-end flex-row-reverse mt-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="w-full bg-indigo-50 border border-indigo-100 rounded-xl rounded-tr-sm p-4 flex flex-col gap-2.5 shadow-sm">
                     <div className="w-3/4 h-2 bg-indigo-200 rounded-full"></div>
                  </div>
                </div>
             </div>
           </div>
           <div className="flex flex-col items-center text-center px-8 md:px-16 pb-12 mt-auto">
             <h3 className="text-2xl font-semibold text-black mb-4">AI-ready components</h3>
             <p className="text-zinc-500 mb-6">
               Launch your ideas effortlessly with AI-powered copy-pasting. Just prompt and build. No installation needed!
             </p>
             <a href="#" className="font-medium text-indigo-500 hover:text-indigo-600 flex items-center">
               Install now <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </a>
           </div>
        </div>

        {/* Card 4: Text top, graphic bottom */}
        <div className="flex flex-col pt-12 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           <div className="flex flex-col items-center text-center px-8 md:px-16">
             <h3 className="text-2xl font-semibold text-black mb-4">Modern performance + updates</h3>
             <p className="text-zinc-500 mb-6">
               Modern performance without annoying lock-ins. You own the code so you can build and extend without relying on third-party maintainers.
             </p>
             <a href="#" className="font-medium text-indigo-500 hover:text-indigo-600 flex items-center mb-8">
               Get started <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </a>
           </div>
           {/* Graphic bottom */}
           <div className="mt-auto w-full h-[240px] bg-white relative overflow-hidden transition-colors">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-48 flex items-end justify-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-1/3 h-28 bg-white rounded-t-xl shadow-lg border-t border-x border-zinc-200/60 relative overflow-hidden flex flex-col justify-end p-4">
                  <div className="w-full h-1/2 bg-blue-50 border-t border-blue-100 rounded-t-md"></div>
                </div>
                <div className="w-1/3 h-44 bg-white rounded-t-xl shadow-lg border-t border-x border-zinc-200/60 relative overflow-hidden flex flex-col items-center p-4">
                   <div className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm mb-4">Performance</div>
                   <div className="relative flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90">
                         <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-emerald-100" />
                         <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray="163" strokeDashoffset="0" className="text-emerald-500" />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center text-emerald-600 font-bold text-xl tracking-tighter">
                         100
                      </div>
                   </div>
                </div>
                <div className="w-1/3 h-36 bg-white rounded-t-xl shadow-lg border-t border-x border-zinc-200/60 relative overflow-hidden flex flex-col justify-end p-4">
                  <div className="w-full h-2/3 bg-purple-50 border-t border-purple-100 rounded-t-md"></div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
