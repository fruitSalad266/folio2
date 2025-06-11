"use client"

import { useState, useRef, useEffect } from "react"

import Hero from "./components/Hero"
import CSProjectsPanel from "./components/Projects"
import CreativeWork from "./components/CreativeWork"
import Sidebar from "./components/Sidebar"


export default function Portfolio() {
  const [showCSProjects, setShowCSProjects] = useState(false)
  const creativeWorkRef = useRef<HTMLDivElement>(null)
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
    <div className="min-h-screen bg-neutral-900/100 text-white relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/hd/seattle-hd-51p4gft8v344ty7s.jpg')"
        }}
      />

      {/* Left Sidebar */}
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-500 ease-in-out relative z-10 ${
          showCSProjects
            ? sidebarCollapsed
              ? "-translate-x-[calc(100vw-4rem)]"
              : "-translate-x-[calc(100vw-20rem)]"
            : sidebarCollapsed
              ? "ml-16"
              : "ml-80"
        }`}
      >
        <div className="min-h-screen">
          <Hero 
            scrollToCreativeWork={scrollToCreativeWork}
            toggleSidebar={toggleSidebar}
            setShowCSProjects={setShowCSProjects}
            setSidebarCollapsed={setSidebarCollapsed}
            sidebarCollapsed={sidebarCollapsed}
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