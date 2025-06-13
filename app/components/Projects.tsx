'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Github } from "lucide-react"
import TiltCard from "./TiltCard"
import { useState } from "react"

interface Project {
  title: string
  description: string
  link?: string
  github?: string
  tech: string[]
}

interface CSProjectsPanelProps {
  showCSProjects: boolean
  setShowCSProjects: (show: boolean) => void
}

const projects: Project[] = [
  {
    title: "Sentiment Trading Algorithm",
    description: "Built a neural network to classify handwritten digits with 98% accuracy using TensorFlow and Python. Implemented data preprocessing, model training, and evaluation pipelines.",
    github: "https://github.com/example/ml-classifier",
    tech: ["Python", "TensorFlow", "NumPy", "QuantConnect", "BeautifulSoup", "HuggingFace"]
  },
  {
    title: "Reddit Query",
    description: "Query reddit for anything. Fullstack application with custom API to parse pushpull. Deployed on Vercel with render backend.",
    link: "redditquery.vercel.app",
    github: "https://github.com/fruitsalad266/redditquery",
    tech: ["Next.JS", "React", "Requests", "Python", "JSX", "PyTest", "FastAPI"]
  },
  {
    title: "Snowflake Figma Plugin",
    description: "Figma plugin to generate patterns of snowflakes with Perlin Noise. Can be configured for multiple variants or other objects. Features custom UI.",
    github: "https://github.com/fruitSalad266/snowflake1",
    tech: ["TypeScript", "HTML", "CSS", "Figma API"]
  },
  {
    title: "Diabetes Predictor",
    description: "Researched and implemented diabetes predictor based on biometric factors. Created web-app equivalent for kNN visualization with adjustable parameters",
    github: "https://github.com/fruitSalad266/diabetes1",
    tech: ["Python", "Pandas", "scikit-learn", "seaborn", "Plotly Dash", "Jupyter"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing large datasets with real-time updates and customizable charts. Built with modern web tech and optimized for performance.",
    link: "https://data-viz.example.com",
    github: "https://github.com/example/data-viz",
    tech: ["Vue.js", "Chart.js", "PostgreSQL"]
  },
  {
    title: "Mobile Game Engine",
    description: "Lightweight 2D game engine for mobile platforms with physics simulation, sprite animation, and audio support. Optimized for performance on low-end devices.",
    github: "https://github.com/example/game-engine",
    tech: ["C++", "OpenGL", "Android NDK"]
  }
]

export default function Projects({ showCSProjects, setShowCSProjects }: CSProjectsPanelProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const renderTechTags = (tech: string[]) => {
    return tech.map((item, index) => (
      <span
        key={index}
        onMouseEnter={() => setHoveredTech(item)}
        onMouseLeave={() => setHoveredTech(null)}
        className={`px-3 py-1 text-xs mr-2 mb-2 inline-block rounded-full border transition-all duration-300 select-none ${
          hoveredTech === item
            ? 'bg-gray-600/50 border-gray-500/50 text-white'
            : 'bg-gray-700/50 border-gray-600/50 text-gray-300'
        }`}
      >
        {item}
      </span>
    ))
  }

  return (
    <div
      className={`fixed right-0 top-0 h-full w-[calc(100vw-4rem)] bg-neutral-900/40 backdrop-blur-sm text-white overflow-y-auto transition-transform duration-500 ease-in-out z-20 no-scrollbar ${
        showCSProjects ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl md:text-6xl font-bold lg:text-8xl">TECHNICALS</h2>
          <Button
            onClick={() => setShowCSProjects(false)}
            variant="outline"
            size="sm"
            className="group bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">In the process of learning: ADA, Rust, and OCaml</p>
        <div className="flex items-center justify-between my-4">
          <h2 className="text-2xl md:text-4xl font-bold">SKILLS</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          <TiltCard className="border border-gray-700/50 bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div>
              {renderTechTags(['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++', 'Bash', 'HTML', 'R', 'JSX', 'SCSS', 'LaTeX', 'Markdown', 'TSX'])}
            </div>
          </TiltCard>
          <TiltCard className="border border-gray-700/50 bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <div>
              {renderTechTags(['Git', 'Pandas', 'Seaborn', 'Plotly Dash', 'scikit-learn'
                , 'React', 'FastAPI', 'Next.JS', 'Node.JS', 'PyTorch', 'Jupyter', 
                'Agile framework', 'QuantConnect', 'MySQL', 'SQLite', 'HuggingFace', 
                'Vite', 'GNU', 'Tailwind', 'Bootstrap', 'Requests', 'Jupyter'])}
            </div>
          </TiltCard>
        </div>

        <div className="flex items-center justify-between my-6">
          <h2 className="text-2xl md:text-4xl font-bold">PROJECTS</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <TiltCard 
              key={index}
              className="border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {renderTechTags(project.tech)}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  )
} 