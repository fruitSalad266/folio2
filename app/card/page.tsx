"use client"

import HeroCard from "./components/HeroCard"

export default function CardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black text-white">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroCard />
      </div>
    </div>
  )
} 