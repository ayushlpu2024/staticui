import React from 'react'

export function CTA() {
  return (
    <section className="w-full bg-white pt-20 pb-0 flex flex-col items-center relative overflow-hidden border-t border-zinc-200/60">
      <div className="text-center mb-8 px-4 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-8">
          Your new component library is ready. Are you?
        </h2>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-[#a7f3d0] hover:bg-[#6ee7b7] text-zinc-900 font-sans text-sm font-medium rounded-full border border-zinc-300 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            Get started
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 font-sans text-sm font-medium rounded-full border border-zinc-300 transition-colors shadow-sm">
            View components
          </a>
        </div>
      </div>

      {/* Colorful stacked blocks graphic */}
      <div className="w-full flex items-end mt-4 opacity-90">
        <div className="w-[7%] flex flex-col">
          <div className="h-3 md:h-4 bg-[#fde68a]"></div>
          <div className="h-4 md:h-6 bg-[#fda4af]"></div>
          <div className="h-6 md:h-8 bg-[#e4e4e7]"></div>
          <div className="h-4 md:h-5 bg-[#fb7185]"></div>
          <div className="h-3 md:h-4 bg-[#6ee7b7]"></div>
          <div className="h-8 md:h-12 bg-[#fbbf24]"></div>
        </div>
        <div className="w-[6%] flex flex-col">
          <div className="h-8 md:h-12 bg-[#ffedd5]"></div>
          <div className="h-4 md:h-6 bg-[#fcd34d]"></div>
          <div className="h-10 md:h-16 bg-[#fdba74]"></div>
          <div className="h-4 md:h-5 bg-[#818cf8]"></div>
        </div>
        <div className="w-[8%] flex flex-col">
          <div className="h-10 md:h-16 bg-[#fde68a]"></div>
          <div className="h-3 md:h-5 bg-[#fecdd3]"></div>
          <div className="h-8 md:h-10 bg-[#d4d4d8]"></div>
          <div className="h-12 md:h-20 bg-[#fb923c]"></div>
        </div>
        <div className="w-[9%] flex flex-col">
          <div className="h-4 md:h-6 bg-[#fecdd3]"></div>
          <div className="h-16 md:h-24 bg-[#d8b4fe]"></div>
          <div className="h-6 md:h-10 bg-[#818cf8]"></div>
          <div className="h-8 md:h-12 bg-[#fbbf24]"></div>
        </div>
        <div className="w-[6%] flex flex-col">
          <div className="h-6 md:h-10 bg-[#818cf8]"></div>
          <div className="h-8 md:h-12 bg-[#60a5fa]"></div>
          <div className="h-14 md:h-20 bg-[#fdba74]"></div>
        </div>
        <div className="w-[8%] flex flex-col">
          <div className="h-10 md:h-14 bg-[#dcfce7]"></div>
          <div className="h-6 md:h-8 bg-[#fef3c7]"></div>
          <div className="h-4 md:h-6 bg-[#fb923c]"></div>
          <div className="h-12 md:h-16 bg-[#fde68a]"></div>
        </div>
        <div className="w-[10%] flex flex-col">
          <div className="h-8 md:h-12 bg-[#d6d3d1]"></div>
          <div className="h-6 md:h-8 bg-[#ffe4e6]"></div>
          <div className="h-4 md:h-6 bg-[#22d3ee]"></div>
          <div className="h-16 md:h-24 bg-[#fdba74]"></div>
        </div>
        <div className="w-[11%] flex flex-col">
          <div className="h-16 md:h-24 bg-[#fb923c]"></div>
          <div className="h-10 md:h-16 bg-[#fdba74]"></div>
          <div className="h-4 md:h-6 bg-[#22d3ee]"></div>
          <div className="h-8 md:h-12 bg-[#fbbf24]"></div>
        </div>
        <div className="w-[8%] flex flex-col">
          <div className="h-6 md:h-10 bg-[#fdba74]"></div>
          <div className="h-20 md:h-32 bg-[#fb923c]"></div>
          <div className="h-6 md:h-8 bg-[#f9a8d4]"></div>
          <div className="h-8 md:h-10 bg-[#fde68a]"></div>
        </div>
        <div className="w-[10%] flex flex-col">
          <div className="h-6 md:h-8 bg-[#fda4af]"></div>
          <div className="h-4 md:h-6 bg-[#fb7185]"></div>
          <div className="h-12 md:h-16 bg-[#fdba74]"></div>
          <div className="h-4 md:h-6 bg-[#6ee7b7]"></div>
          <div className="h-4 md:h-6 bg-[#ffedd5]"></div>
          <div className="h-10 md:h-16 bg-[#fb923c]"></div>
        </div>
        <div className="w-[8%] flex flex-col">
          <div className="h-20 md:h-32 bg-[#a3e635]"></div>
          <div className="h-4 md:h-6 bg-[#ffedd5]"></div>
          <div className="h-14 md:h-20 bg-[#fbbf24]"></div>
        </div>
        <div className="w-[9%] flex flex-col">
          <div className="h-10 md:h-16 bg-[#fdba74]"></div>
          <div className="h-8 md:h-12 bg-[#fde68a]"></div>
          <div className="h-4 md:h-6 bg-[#22d3ee]"></div>
          <div className="h-12 md:h-16 bg-[#fb923c]"></div>
        </div>
      </div>
    </section>
  )
}
