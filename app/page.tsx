"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from "./components/Hero"

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

  // Creative work projects with multiple images
  const creativeProjects = [
    {
      title: "Brand Identity System",
      description:
        "Complete visual identity for a sustainable fashion brand, including logo design, color palette, typography, and brand guidelines. This comprehensive system ensures consistent brand expression across all touchpoints.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Logo+Design",
        "/placeholder.svg?height=600&width=800&text=Color+Palette",
        "/placeholder.svg?height=600&width=800&text=Typography",
        "/placeholder.svg?height=600&width=800&text=Brand+Guidelines",
      ],
    },
    {
      title: "Interactive Installation",
      description:
        "Motion-responsive digital art piece for gallery exhibition, combining physical sensors with real-time visual feedback. The installation creates an immersive environment that responds to visitor movement and interaction.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Installation+View",
        "/placeholder.svg?height=600&width=800&text=Sensor+Setup",
        "/placeholder.svg?height=600&width=800&text=Visual+Feedback",
        "/placeholder.svg?height=600&width=800&text=User+Interaction",
      ],
    },
    {
      title: "Editorial Design",
      description:
        "Magazine layout and typography for quarterly publication, featuring innovative grid systems and experimental typography. Each issue explores the intersection of design, technology, and culture through thoughtful visual storytelling.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Cover+Design",
        "/placeholder.svg?height=600&width=800&text=Grid+System",
        "/placeholder.svg?height=600&width=800&text=Typography",
        "/placeholder.svg?height=600&width=800&text=Layout+Spreads",
      ],
    },
    {
      title: "Immersive Web Experience",
      description:
        "3D interactive website for architectural firm, showcasing projects through WebGL and immersive storytelling techniques. The experience allows users to explore architectural spaces in an intuitive and engaging way.",
      images: [
        "/placeholder.svg?height=600&width=800&text=Homepage",
        "/placeholder.svg?height=600&width=800&text=3D+Navigation",
        "/placeholder.svg?height=600&width=800&text=Project+Gallery",
        "/placeholder.svg?height=600&width=800&text=Interactive+Features",
      ],
    },
  ]

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

          {/* Creative Work Section */}
          <section ref={creativeWorkRef} className="min-h-screen">
            <div className="text-center py-16">
              <div className="bg-neutral-800/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/50 inline-block">
                <h2 className="text-3xl font-semibold mb-0 text-white">Creative Work</h2>
              </div>
            </div>

            {creativeProjects.map((project, projectIndex) => (
              <div key={projectIndex} className="relative min-h-[400vh]">
                {/* Project Container */}
                <div className={`flex h-full ${projectIndex % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Sticky Description */}
                  <div className="w-1/2 relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center p-16">
                      <div className="max-w-lg bg-neutral-800/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/50">
                        <h3 className="text-5xl font-bold mb-8 leading-tight text-white">{project.title}</h3>
                        <p className="text-2xl text-neutral-300 font-medium leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Images */}
                  <div className="w-1/2 absolute right-0 top-0">
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="h-screen bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${imageIndex + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* CS Projects Panel (Right) */}
      <div
        className={`fixed right-0 top-0 h-full w-[calc(100vw-4rem)] bg-neutral-900/40 backdrop-blur-sm text-white overflow-y-auto transition-transform duration-500 ease-in-out z-20 ${
          showCSProjects ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light">CS Projects</h2>
            <Button
              onClick={() => setShowCSProjects(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            {/* Project 1 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Machine Learning Classifier</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Built a neural network to classify handwritten digits with 98% accuracy using TensorFlow and Python.
                Implemented data preprocessing, model training, and evaluation pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Python</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">TensorFlow</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">NumPy</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Reddit Query</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Query reddit for anything. 
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Requests</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Algorithm Visualizer</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Interactive web app that visualizes sorting and pathfinding algorithms with step-by-step animations.
                Features customizable speed controls and multiple algorithm options.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">D3.js</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Blockchain Voting System</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Secure voting platform using Ethereum smart contracts with transparent and immutable vote recording.
                Includes voter verification and real-time results dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Solidity</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Web3.js</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Ethereum</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Data Visualization Dashboard</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Interactive dashboard for analyzing large datasets with real-time updates and customizable charts. Built
                with modern web technologies and optimized for performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Vue.js</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Chart.js</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Mobile Game Engine</h3>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Lightweight 2D game engine for mobile platforms with physics simulation, sprite animation, and audio
                support. Optimized for performance on low-end devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">C++</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">OpenGL</span>
                <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">Android NDK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}