"use client"

import React, { useRef, useState, useEffect, ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: ReactNode
  className?: string
  trackClassName?: string
}

export function Carousel({ children, className = "", trackClassName = "" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className={`relative z-10 ${className}`}>
      {/* Scroll Buttons */}
      <div className="absolute -top-14 right-0 z-20 hidden gap-3 sm:flex">
        <button 
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all ${
            canScrollLeft ? "opacity-100 hover:border-zinc-300 hover:text-zinc-900" : "cursor-not-allowed opacity-35"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all ${
            canScrollRight ? "opacity-100 hover:border-zinc-300 hover:text-zinc-900" : "cursor-not-allowed opacity-35"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Carousel Tracks */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className={`flex gap-5 overflow-x-auto scroll-smooth px-1 pb-12 sm:gap-6 lg:px-2 [&::-webkit-scrollbar]:hidden ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
