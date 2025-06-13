"use client"

import Link from "next/link"
import { ArrowLeft} from "lucide-react"

export default function ThesesPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/"
                className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Introduction */}
          <section className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
              THESES
            </h1>
            <p className="text-l italic text-gray-300 leading-relaxed max-w-3xl">
              Section is under construction.
            </p>
          </section>
          <p className="text-l leading-relaxed max-w-3xl mb-4">I design for functionality. My goal is to make users:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="text-l leading-relaxed max-w-3xl">Want to look at my product</li>
            <li className="text-l leading-relaxed max-w-3xl">Get the information they need quickly</li>
            <li className="text-l leading-relaxed max-w-3xl">Don&apos;t have to deal with any clutter</li>
          </ul>
          <p>For the most part, customers, even the general population e.g. college students are still extremely tech literate.
            They've been on screens since earlier than they can remember and know how to search for information.
            A lack of online presence in 2025 only serves to hurt, and this is not something most college organizations
            are cognizant of - or at least not willing to adapt to. </p>
          {/* Call to Action */}
          <section className="mt-20 text-center">
            <div className="p-5 rounded-2xl border border-gray-800/50 bg-gray-900/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">THOUGHTS?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Email me: <a href="mailto:mattcng9@uw.edu" className="text-gray-500 hover:text-white transition-colors duration-200">mattcng9 (at) uw dot edu</a>
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 mt-20">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-400 text-sm">
            <p>© 2025 Matthew Nguyen. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
} 