'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ExternalLink } from "lucide-react"
import TiltCard from "./TiltCard"

interface Project {
  title: string
  description: string
  link: string
  tech: string[]
}

interface CSProjectsPanelProps {
  showCSProjects: boolean
  setShowCSProjects: (show: boolean) => void
}

const projects: Project[] = [
  {
    title: "Machine Learning Classifier",
    description: "Built a neural network to classify handwritten digits with 98% accuracy using TensorFlow and Python. Implemented data preprocessing, model training, and evaluation pipelines.",
    link: "#",
    tech: ["Python", "TensorFlow", "NumPy"]
  },
  {
    title: "Reddit Query",
    description: "Query reddit for anything.",
    link: "#",
    tech: ["Next.js", "React", "Requests"]
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive web app that visualizes sorting and pathfinding algorithms with step-by-step animations. Features customizable speed controls and multiple algorithm options.",
    link: "#",
    tech: ["React", "D3.js", "TypeScript"]
  },
  {
    title: "Blockchain Voting System",
    description: "Secure voting platform using Ethereum smart contracts with transparent and immutable vote recording. Includes voter verification and real-time results dashboard.",
    link: "#",
    tech: ["Solidity", "Web3.js", "Ethereum"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing large datasets with real-time updates and customizable charts. Built with modern web tech and optimized for performance.",
    link: "#",
    tech: ["Vue.js", "Chart.js", "PostgreSQL"]
  },
  {
    title: "Mobile Game Engine",
    description: "Lightweight 2D game engine for mobile platforms with physics simulation, sprite animation, and audio support. Optimized for performance on low-end devices.",
    link: "#",
    tech: ["C++", "OpenGL", "Android NDK"]
  }
]

export default function Projects({ showCSProjects, setShowCSProjects }: CSProjectsPanelProps) {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-[calc(100vw-4rem)] bg-neutral-900/40 backdrop-blur-sm text-white overflow-y-auto transition-transform duration-500 ease-in-out z-20 ${
        showCSProjects ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-6xl font-bold">TECHNICAL PROJECTS</h2>
          <Button
            onClick={() => setShowCSProjects(false)}
            variant="outline"
            size="sm"
            className="group bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <TiltCard 
              key={index}
              className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  )
} 