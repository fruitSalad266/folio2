"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

interface HeroProps {
  scrollToCreativeWork: () => void
  toggleSidebar: () => void
  setShowCSProjects: (show: boolean) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  sidebarCollapsed: boolean
}

export default function Hero({ 
  scrollToCreativeWork, 
  toggleSidebar, 
  setShowCSProjects, 
  setSidebarCollapsed,
  sidebarCollapsed
}: HeroProps) {
  return (
    <section className={`h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-300 ${!sidebarCollapsed ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
      <div className="w-full max-w-2xl text-center space-y-3 sm:space-y-4 bg-neutral-900/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-700/50">
        <h1 className="text-5xl md:text-6xl tracking-tight text-center text-white font-bold">MATTHEW NGUYEN</h1>
        <p className="text-sm md:text-base text-gray-300 font-light text-center leading-none">
          Informatics + Business at the <a href="https://uw.edu" target="_blank" className="hover:text-white transition-colors">University of Washington</a>
        </p>
        <p className="text-sm md:text-base text-gray-300 font-light text-center mt-0 leading-tight">Law @ Harvard</p>
        <div className="flex space-x-4 items-center justify-center">
          <a href="https://github.com/fruitsalad266" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/mattcng" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:mattcng9@uw.edu" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 pt-2">
          <button
            onClick={toggleSidebar}
            className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors border-b border-gray-600 pb-1"
          >
            About + Experience
          </button>
          <button
            onClick={scrollToCreativeWork}
            className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors border-b border-gray-600 pb-1"
          >
            Creative Work
          </button>
          <Button 
            onClick={() => {
              setShowCSProjects(true)
              setSidebarCollapsed(true)
            }} 
            variant="outline" 
            size="sm" 
            className="group bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700"
          >
            CS Projects
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
} 