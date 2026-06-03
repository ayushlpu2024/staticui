import React from 'react'

export function Features() {
  return (
    <section className="w-full border-t border-zinc-200/60 bg-white relative z-20 py-20">
      <div className="w-full border-b border-zinc-200/60 pb-20 px-8 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4">
          Everything you need to <span className="text-indigo-500">build </span> faster.
        </h2>
        <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
          Equip your workflow with robust, scalable components that just work.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row border-b border-zinc-200/60">
        {/* Card A – Copy and Paste */}
        <div className="flex-1 p-8 border-b lg:border-b-0 lg:border-r border-zinc-200/60 bg-white text-black hover:bg-zinc-100 transition-colors group">
          <div className="mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h3 className="text-2xl font-medium tracking-tight mb-4">Copy and Paste</h3>
          <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
            Never build a standard component from scratch again. Save hundreds of hours of design and development time.
          </p>
        </div>
        {/* Card B – Layered Aesthetics */}
        <div className="flex-1 p-8 bg-white text-black hover:bg-zinc-100 transition-colors group">
          <div className="mb-6 ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 17 22 12"/></svg>
          </div>
          <h3 className="text-2xl font-medium tracking-tight mb-4">Layered Aesthetics</h3>
          <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
            Never build a standard component from scratch again. Save hundreds of hours of design and development time.
          </p>
        </div>
      </div>
    </section>
  )
}
