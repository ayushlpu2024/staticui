import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter } from 'lucide-react'

interface ListingPageProps {
  title: string
  description: string
  items: any[]
  type: 'components' | 'blocks' | 'pages' | 'templates'
}

export function ListingPage({ title, description, items, type }: ListingPageProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col relative overflow-hidden">
      
      {/* Main Content Wrapper */}
      <main className="flex-1 relative z-10 w-full max-w-[1200px] mx-auto border-x border-zinc-200/60">
        
        {/* Header Section */}
        <div className="px-4 pt-16 pb-8">
          <div className="mb-2 space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg text-zinc-500 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="border-t border-zinc-200/60">
          <div className="px-4 py-3 flex items-center text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span className="mx-3 text-zinc-300">{'>'}</span>
            <span className="text-zinc-900 font-medium capitalize">{title}</span>
          </div>
        </div>

        {/* Categories / Filters Bar */}
        <div className="border-t border-b border-zinc-200/60 bg-zinc-50/50">
          <div className="px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm">
               <span className="text-zinc-900 font-medium">All <span className="text-zinc-500 font-normal">{items.length}</span></span>
               <span className="text-zinc-300">/</span>
               <label className="flex items-center gap-2 text-zinc-600 cursor-pointer hover:text-zinc-900">
                  <input type="checkbox" className="rounded border-zinc-300" /> Free
               </label>
               <label className="flex items-center gap-2 text-zinc-600 cursor-pointer hover:text-zinc-900">
                  <input type="checkbox" className="rounded border-zinc-300" /> Premium
               </label>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 border border-zinc-200/60 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-4 pt-12 pb-24">
          <h2 className="text-2xl font-bold mb-8 capitalize">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.id} href={`/${type}/${item.slug}`}>
                <div className="group rounded-2xl bg-zinc-50/80 p-3 transition-colors hover:bg-zinc-100 border border-transparent hover:border-zinc-200">
                  
                  {/* Preview Area */}
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm relative flex items-center justify-center">
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex gap-2 z-20">
                      {item.new && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded-full shadow-sm">New</span>
                      )}
                      {item.premium && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold bg-purple-100 text-purple-700 rounded-full shadow-sm">Pro</span>
                      )}
                    </div>

                    {item.thumbnail ? (
                      <Image 
                        src={typeof item.thumbnail === 'string' ? item.thumbnail : item.thumbnail.url} 
                        alt={item.title}
                        fill
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-zinc-400 transition-transform duration-500 group-hover:scale-105">
                        <span className="text-sm font-medium">Click to view</span>
                        <span className="text-xs mt-1">{item.title}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Details */}
                  <div className="mt-4 px-2 pb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm text-zinc-900">{item.title}</h3>
                      {item.new && (
                        <span className="text-[10px] font-medium text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-sm border border-orange-100">
                          +New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                      {item.description || "View details and usage"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            
            {items.length === 0 && (
              <div className="col-span-full py-16 text-center text-zinc-500 border border-dashed border-zinc-300 rounded-2xl bg-zinc-50">
                No items found.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
