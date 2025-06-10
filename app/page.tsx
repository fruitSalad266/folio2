"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

import Hero from "./components/Hero"
import CSProjectsPanel from "./components/Projects"
import CreativeWork from "./components/CreativeWork"

import TestFloat from "./components/TestFloat"

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
    <div className="min-h-screen bg-neutral-900/100 text-white overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/hd/seattle-hd-51p4gft8v344ty7s.jpg')"
        }}
      />

      {/* Left Sidebar - About & Experience */}
      <div
        className={`fixed left-0 top-0 h-full bg-black-800/90 backdrop-blur-sm border-r border-gray-700/50 overflow-y-auto z-10 transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-85"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-md cursor-pointer transition-colors z-20"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        <div
          className={`p-8 transition-opacity duration-300 ${sidebarCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="space-y-12">
            <div>
            <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Picture</h2>
            <img 
              src="/pic1.jpg" 
              alt="Picture of Me. I am extremely handsome. Wow!" 
              className="w-80 h-100 object-cover"
            />
            </div>
            {/* About Section */}
            <div>
              <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">About</h2>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-gray-200">
                    Hi! I'm a third-year student at the University of Washington, Seattle, studying both Informatics (Software) and Business (Operations Supply Chain). 
                    I also work at <a href="https://www.washington.edu/research/compliance/" className="text-grey-400 hover:text-white transition-colors" target="_blank">UW Research Compliance</a> as 
                    a data analyst and am the current Director of PR for <a href="https://uwifc.com" target="blank" className="text-grey-400 hover:text-white transition-colors">UW IFC.</a>
                </p>
                <p className="text-sm leading-relaxed text-gray-200">
                I'm highly experienced in data for business, design, full stack, database, systems architecture, 
                ML and AI et cetera. I'm also experienced in DJing. </p>
                <p className="text-sm leading-relaxed text-gray-200">This summer I will be working at <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" className="text-grey-400 hover:text-white transition-colors">Amazon</a> Bellevue</p>
                <p className="text-sm leading-relaxed text-gray-200">The best way to contact me is through my email: <a href="mailto:mattcng9@uw.edu" className="text-grey-400 hover:text-white transition-colors">mattcng9 (at) uw dot edu</a></p>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-sm text-white">Systems and Data Analyst</h3>
                  <p className="text-xs text-gray-400 mb-2">UW Research Compliance • 2023 - Present</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    I used Tableau, Power BI and Excel to generate useful visualizations and projections of workload.
                    I also automated various processes with Python and pulled data from a central SQL server.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">Developer</h3>
                  <p className="text-xs text-gray-400 mb-2">Stealth • 2024 - Present</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Full Stack + Business Dev
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">Junior Partner</h3>
                  <p className="text-xs text-gray-400 mb-2">8VC • 2025 - Present</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Changing the world
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">FDSE</h3>
                  <p className="text-xs text-gray-400 mb-2">Palantir • 2023 - 2025</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Worked with clients to custom integrate Foundry products
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Contact</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-500 ease-in-out relative z-5 ${
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
          />


          {/* <CreativeWork creativeWorkRef={creativeWorkRef} /> */}
          <TestFloat />
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