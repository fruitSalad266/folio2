'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ExternalLink } from "lucide-react"

interface CSProjectsPanelProps {
  showCSProjects: boolean
  setShowCSProjects: (show: boolean) => void
}

export default function Projects({ showCSProjects, setShowCSProjects }: CSProjectsPanelProps) {
  return (
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
  )
} 