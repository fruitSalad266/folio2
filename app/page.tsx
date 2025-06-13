"use client"

import { useState, useRef, useEffect } from "react"

import Hero from "./components/Hero"
import CSProjectsPanel from "./components/Projects"
import CreativeWork from "./components/CreativeWork"
import Sidebar from "./components/Sidebar"

export default function Portfolio() {
  const [showCSProjects, setShowCSProjects] = useState(false)
  const creativeWorkRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const scrollToCreativeWork = () => {
    creativeWorkRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX > 20 && sidebarCollapsed) {
        setSidebarCollapsed(false)
      }
      else if (e.deltaX < -20 && !sidebarCollapsed) {
          setSidebarCollapsed(true)
      }
    }
  
    window.addEventListener('wheel', handleWheel, { passive: false })
  
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [sidebarCollapsed])

  return (
    <div className="min-h-screen bg-neutral-900/100 text-white relative no-scrollbar">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/hd/seattle-hd-51p4gft8v344ty7s.jpg')"
        }}
      />

      {/* Left Sidebar */}
      <Sidebar 
        ref={sidebarRef}
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-500 ease-in-out relative z-10 ${
          showCSProjects
            ? sidebarCollapsed 
              ? "-translate-x-[calc(100vw-4rem)]" // Active when showCSProjects=true AND sidebarCollapsed=true
              // When showCSProjects is true and sidebar is expanded:
              // Move content left by (viewport width - 20rem) to make room for projects
              : "-translate-x-[calc(100vw-20rem)]"
            : sidebarCollapsed
              // When sidebar is collapsed: Add 16px left margin
              ? "ml-2 md:ml-16"
              // When sidebar is expanded: Add 80px left margin
              : "ml-80"
        }`}
      >
        <div className={`min-h-screen transition-colors duration-300 
              ${!sidebarCollapsed ? 'opacity-30 bg-black/40 hover:opacity-50 transition-opacity duration-250' 
              : 'opacity-100'}`}>
          <Hero 
            scrollToCreativeWork={scrollToCreativeWork}
            toggleSidebar={toggleSidebar}
            setShowCSProjects={setShowCSProjects}
            setSidebarCollapsed={setSidebarCollapsed}
            sidebarCollapsed={sidebarCollapsed}
            sidebarRef={sidebarRef}
          />

          <CreativeWork creativeWorkRef={creativeWorkRef} />
          {/* <TestFloat /> */}
        </div>
      </div>

      {/* CS Projects Panel */}
      <CSProjectsPanel 
        showCSProjects={showCSProjects}
        setShowCSProjects={setShowCSProjects}
      />
    </div>
  )
}