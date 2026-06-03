import React from 'react'

export function Workflow() {
  return (
    <section className="w-full flex flex-col border-b border-zinc-200/60 bg-zinc-50/30">
      <div className="max-w-4xl mx-auto w-full text-center py-20 px-8 md:px-16 mb-0">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4">
           Accelerate your <span className="text-indigo-500">workflow</span>.
         </h2>
         <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
           Never build a standard component from scratch again. Save hundreds of hours of design and development time.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-zinc-200/60 bg-white">
        {/* Card 1 */}
        <div className="flex flex-col pt-8 md:pt-12 border-b md:border-b-0 md:border-r border-zinc-200/60 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           <div className="flex items-center gap-3 mb-4 px-8 md:px-12">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h4 className="text-xl font-medium text-black">Browse the Catalog</h4>
           </div>
           <p className="text-zinc-500 mb-12 px-8 md:px-12">
             Explore dozens of premium UI components sorted by categories and layouts.
           </p>
           <div className="mt-auto relative w-full h-[220px] bg-zinc-50 border-t border-zinc-200/60 overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             {/* Floating UI 1 */}
             <div className="absolute top-8 left-6 right-6 h-32 bg-white rounded-lg shadow-sm border border-zinc-200/60 p-4 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
               <div className="w-1/3 h-3 bg-zinc-100 rounded-full"></div>
               <div className="w-full flex gap-3">
                  <div className="w-1/4 h-16 bg-zinc-100 rounded-md"></div>
                  <div className="w-3/4 flex flex-col gap-2">
                    <div className="w-full h-3 bg-zinc-100 rounded-md"></div>
                    <div className="w-5/6 h-3 bg-zinc-100 rounded-md"></div>
                    <div className="w-1/2 h-3 bg-zinc-100 rounded-md"></div>
                  </div>
               </div>
             </div>
             {/* Overlapping UI 2 */}
             <div className="absolute bottom-6 -right-4 w-44 p-3 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-200/60 transition-transform duration-500 delay-75 group-hover:-translate-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <div className="text-xs font-semibold text-zinc-500">Component</div>
                </div>
                <div className="text-2xl font-semibold tracking-tight text-black">Ready</div>
             </div>
           </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col pt-8 md:pt-12 border-b md:border-b-0 md:border-r border-zinc-200/60 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           <div className="flex items-center gap-3 mb-4 px-8 md:px-12">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              </div>
              <h4 className="text-xl font-medium text-black">Preview & Tweak</h4>
           </div>
           <p className="text-zinc-500 mb-12 px-8 md:px-12">
             View live interactive previews and see exactly how the component responds.
           </p>
           <div className="mt-auto relative w-full h-[220px] bg-zinc-50 border-t border-zinc-200/60 overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             {/* Floating panel */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] bg-white rounded-xl shadow-lg border border-zinc-200/60 p-5 transition-transform duration-500 group-hover:scale-105">
               <div className="text-sm font-semibold text-black mb-4">Properties</div>
               <div className="flex flex-col gap-4">
                 <div className="flex items-center justify-between">
                   <div className="text-xs font-medium text-zinc-500">Color</div>
                   <div className="flex gap-1.5">
                     <div className="w-4 h-4 rounded-full bg-indigo-500 ring-2 ring-offset-1 ring-indigo-100"></div>
                     <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                     <div className="w-4 h-4 rounded-full bg-rose-500"></div>
                   </div>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="text-xs font-medium text-zinc-500">Radius</div>
                   <div className="w-20 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-indigo-500 rounded-full"></div>
                   </div>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="text-xs font-medium text-zinc-500">Shadow</div>
                   <div className="w-8 h-4 bg-indigo-500 rounded-full relative">
                     <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col pt-8 md:pt-12 relative overflow-hidden group hover:bg-zinc-50/50 transition-colors">
           <div className="flex items-center gap-3 mb-4 px-8 md:px-12">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              </div>
              <h4 className="text-xl font-medium text-black">Copy & Deploy</h4>
           </div>
           <p className="text-zinc-500 mb-12 px-8 md:px-12">
             Click to copy the raw React code and drop it straight into your Next.js project.
           </p>
           <div className="mt-auto relative w-full h-[220px] bg-zinc-50 border-t border-zinc-200/60 overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             
             {/* Code window */}
             <div className="absolute top-8 left-6 right-6 bg-[#0d1117] rounded-lg shadow-xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
               <div className="h-7 bg-[#161b22] border-b border-white/10 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
               </div>
               <div className="p-4 text-left">
                  <div className="font-mono text-[11px] leading-relaxed text-zinc-400">
                    <span className="text-pink-400">import</span> {'{'} Button {'}'} <span className="text-pink-400">from</span> <span className="text-emerald-300">'@/ui'</span>;<br/>
                    <br/>
                    <span className="text-pink-400">export default function</span> <span className="text-blue-300">App</span>() {'{'}<br/>
                    &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-indigo-400">Button</span> <span className="text-amber-300">variant</span>=<span className="text-emerald-300">"default"</span>&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deploy Now<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-indigo-400">Button</span>&gt;<br/>
                    &nbsp;&nbsp;);<br/>
                    {'}'}
                  </div>
               </div>
             </div>

             {/* Copy tooltip */}
             <div className="absolute bottom-6 right-6 bg-white px-3 py-2 rounded-md shadow-lg border border-zinc-200/60 flex items-center gap-2 transition-transform duration-500 delay-75 group-hover:scale-110">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M20 6L9 17l-5-5"/></svg>
               <span className="text-xs font-semibold text-black">Copied</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
