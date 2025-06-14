"use client"

import { useEffect } from "react"
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TiltCard from "./TiltCard"

interface HeroProps {
  scrollToCreativeWork: () => void
  toggleSidebar: () => void
  setShowCSProjects: (show: boolean) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  sidebarCollapsed: boolean
  sidebarRef: React.RefObject<HTMLDivElement | null>
}

export default function Hero({ 
  scrollToCreativeWork, 
  toggleSidebar, 
  setShowCSProjects, 
  setSidebarCollapsed,
  sidebarCollapsed,
  sidebarRef
}: HeroProps) {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!sidebarRef.current) return;
      const clickedElement = event.target as Node;
      
      // Only collapse if clicking outside the sidebar and sidebar is not collapsed
      if (!sidebarRef.current.contains(clickedElement) && !sidebarCollapsed) {
        setSidebarCollapsed(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [sidebarCollapsed, setSidebarCollapsed, sidebarRef])

  return (
    <section className={`h-screen flex items-center justify-center 
      px-4 sm:px-6 md:px-8 lg:px-12 
      transition-opacity duration-250 
      ${!sidebarCollapsed ? 'opacity-0 md:opacity-90' : 'opacity-100'}`}>
      <TiltCard 
        className="w-full max-w-2xl text-center space-y-3 sm:space-y-4 
          bg-neutral-900/10 backdrop-blur-sm 
          p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-700/50"
      >

        <h1 className="text-5xl md:text-6xl my-1 md:my-3 tracking-tight text-center text-white font-bold">MATTHEW NGUYEN</h1>
        <p className="text-sm md:text-base text-gray-300 font-light text-center leading-normal">
          <a href="https://ischool.uw.edu" target="_blank" className="hover:text-white transition-colors"> Informatics</a> + Business 
          at the <a href="https://uw.edu" target="_blank" className="hover:text-white transition-colors">University of Washington</a>
        </p>
        
        {/* <p className="text-sm md:text-base text-gray-300 font-light text-center mt-0 leading-normal">Law @ Harvard</p> */}
        
        <div className="flex space-x-6 items-center justify-center my-3">
          <a href="https://github.com/fruitsalad266" target="_blank" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/mattcng" target="_blank" 
            className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:mattcng9@uw.edu" target="_blank" rel="noreferrer" 
          className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 pt-2">
          <button
            onClick={toggleSidebar}
            className={`text-sm text-gray-300 hover:text-white cursor-pointer 
              transition-colors 
              ${sidebarCollapsed ? 'border-gray-600' : ' border-white'} transition-colors duration-100 border-b pb-1`}
          >
            About + Experience
          </button>
          <button
            onClick={scrollToCreativeWork}
            className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors border-b border-gray-600 pb-1"
          >
            Design Work
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
            Technicals
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

        </div>
      </TiltCard>
    </section>
  )
} 