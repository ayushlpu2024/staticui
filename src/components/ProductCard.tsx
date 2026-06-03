import React from 'react';

export interface ProductCardProps {
  title?: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  imageUrl?: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  onAddToCart?: () => void;
}

export function ProductCard({
  title = "Premium Headphones",
  description = "High-fidelity audio with active noise cancellation and 40-hour battery life.",
  price = "$299.00",
  originalPrice,
  imageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  badge = "New Arrival",
  rating = 4.8,
  reviewsCount = 124,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group relative w-full max-w-sm rounded-3xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] dark:bg-zinc-950 dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)] dark:hover:shadow-[0_20px_40px_rgb(255,255,255,0.1)]">
      {/* Midlayer Image Container */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Overlay Badge */}
        {badge && (
          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur-md shadow-sm">
            {badge}
          </div>
        )}
        
        {/* Quick actions on hover */}
        <div className="absolute top-3 right-3 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-900 backdrop-blur-md hover:bg-white shadow-sm transition-colors" aria-label="Add to wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
      </div>

      {/* Content Layer */}
      <div className="mt-5 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 line-clamp-1" title={title}>{title}</h3>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{price}</span>
            {originalPrice && (
              <span className="text-xs font-medium text-zinc-400 line-through">{originalPrice}</span>
            )}
          </div>
        </div>
        
        {/* Rating */}
        {(rating || reviewsCount) && (
          <div className="mt-1 flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{rating}</span>
            <span className="text-sm text-zinc-400">({reviewsCount})</span>
          </div>
        )}
        
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Action Layer */}
      <div className="mt-5 mb-2 px-2 flex gap-3">
        <button 
          onClick={onAddToCart}
          className="flex-1 rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition-transform active:scale-95 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
