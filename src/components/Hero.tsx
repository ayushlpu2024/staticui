import React from 'react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full pt-32 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Multi-colored Vercel Glow */}
      <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] flex justify-center items-center pointer-events-none opacity-80">
        <div className="absolute left-0 bottom-0 w-[400px] h-[300px] bg-[#f5a524] rounded-full mix-blend-multiply filter blur-[100px]"></div>
        <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[200px] bg-[#f31260] rounded-full mix-blend-multiply filter blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 w-[400px] h-[300px] bg-[#17c964] rounded-full mix-blend-multiply filter blur-[100px]"></div>
        <div className="absolute bottom-0 w-[500px] h-[200px] bg-white filter blur-[80px]"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-[900px] text-black leading-tight">
          Share and discover beautiful UI components.
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-zinc-500 max-w-[700px] font-medium leading-relaxed">
          Our platform provides the developer tools and component infrastructure to discover, copy, and integrate premium UI elements into your next project.
        </p>

        <div className="mt-10 mb-20 flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            href="/components" 
            className="h-12 px-8 flex items-center justify-center rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-[1px]"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Start Exploring
          </Link>
          <a 
            href="#" 
            className="h-12 px-8 flex items-center justify-center rounded-full bg-white text-zinc-900 border border-zinc-200 font-semibold hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-sm"
          >
            Submit a Component
          </a>
        </div>
      </div>
    </section>
  )
}
