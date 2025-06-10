import { useRef } from "react"
import { useFloating, useHover, useInteractions } from '@floating-ui/react';

interface CreativeWorkProps {
  creativeWorkRef: React.RefObject<HTMLDivElement | null>
}

interface CreativeProject {
  title: string
  description: string
  images: string[]
}

const creativeProjects: CreativeProject[] = [
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

export default function CreativeWork({ creativeWorkRef }: CreativeWorkProps) {
  return (
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
  )
} 