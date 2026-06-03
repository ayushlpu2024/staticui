import React from 'react'

export function ComponentEcosystem() {
  return (
    <section className="w-full bg-white pt-24 overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full text-center mb-16 px-8 md:px-16">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4">
           Built-in <span className="text-indigo-500">UI elements</span>.
         </h2>
         <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
           You can take our word for it.
         </p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 auto-rows-[80px] md:auto-rows-[100px] border-t border-l border-zinc-200/60 font-sans text-zinc-500 text-sm md:text-lg grid-flow-dense">

        {/* Top row elements */}
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Accordion</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Buttons</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Navbar</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Card</div>

        {/* Row 2 elements */}
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Dialog</div>

        {/* Center Card - spans 2 columns and 4 rows */}
        <div className="col-span-2 row-span-4 bg-white border-r border-b border-zinc-200/60 p-8 md:p-16 flex flex-col justify-center items-center text-center relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-10">
           <p className="text-xl md:text-3xl font-sans text-zinc-700 mb-12 leading-relaxed font-medium">
             There&apos;s something magical about not having to build components from scratch and{' '}
             <span className="bg-yellow-200 text-black px-2 py-0.5 whitespace-nowrap">
               getting exactly what you want out of it.
             </span>
           </p>
           <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-zinc-200 rounded overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-left font-sans">
                 <div className="font-bold text-black text-base md:text-lg">Frontend Developer</div>
                 <div className="text-sm text-zinc-500 font-medium">Static UI User</div>
              </div>
           </div>
        </div>

        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center text-indigo-500 font-medium bg-white text-black relative cursor-pointer">
           <span className="absolute left-0 top-1/2 w-1.5 h-3 bg-indigo-500 -translate-y-1/2"></span>
           Tooltip
        </div>

        {/* Remaining elements filling the grid */}
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Tabs</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Dropdown</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Modal</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Popover</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Sidebar</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Toast</div>

        {/* Bottom row elements */}
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Slider</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Switch</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Textarea</div>
        <div className="border-r border-b border-zinc-200/60 flex items-center justify-center font-medium hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer">Avatar</div>
      </div>
    </section>
  )
}
