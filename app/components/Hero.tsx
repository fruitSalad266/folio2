"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight,Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"


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
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate rotation based on mouse position relative to center
    const sens = 75;
    const rotateX = -(e.clientY - centerY) / (sens * 0.25);
    const rotateY = -(centerX - e.clientX) / sens;
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <section className={`h-screen flex items-center justify-center 
    px-4 sm:px-6 md:px-8 lg:px-12 
    transition-opacity duration-250 
    ${!sidebarCollapsed ? 'opacity-0 md:opacity-70' : 'opacity-100'}`}>
      <div 
        className={`w-full max-w-2xl text-center space-y-3 sm:space-y-4 
          bg-neutral-900/10 backdrop-blur-sm 
          p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-700/50
          transition-transform duration-200 ease-out
          shadow-2xl`}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          <h1 className="text-5xl md:text-6xl md:my-3 tracking-tight text-center text-white font-bold">MATTHEW NGUYEN</h1>
          <p className="text-sm md:text-base text-gray-300 font-light text-center leading-normal">
            Informatics + Business at the <a href="https://uw.edu" target="_blank" className="hover:text-white transition-colors">University of Washington</a>
          </p>
          <p className="text-sm md:text-base text-gray-300 font-light text-center mt-0 leading-normal">Law @ Harvard</p>
          <div className="flex space-x-4 items-center justify-center my-3">
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
      </div>
    </section>
  )
} 