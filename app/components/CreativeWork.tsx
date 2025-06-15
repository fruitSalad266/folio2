'use client'

import TiltCard from "./TiltCard" 
import Image from "next/image"
import { Instagram, Globe, Figma } from "lucide-react"

interface CreativeWorkProps {
  creativeWorkRef: React.RefObject<HTMLDivElement | null>
}

interface CreativeProject {
  title: string
  subtitle: string
  description: string
  images: string[]
  logo: string
  instagram?: string
  website?: string
  figma?: string
}

const creativeProjects: CreativeProject[] = [
  {
    title: "INTERFRATERNITY COUNCIL",
    subtitle: "UNIVERSITY OF WASHINGTON",
    description:
      "Developed + promoted coherent IFC brand representing 25 fraternities at the University of Washington.",
    images: [
      "/creative/ifc/fpr1.png",
      "/creative/ifc/gogreek.png",
      "/creative/ifc/sticker.png",
      //"/creative/ifc/exec.png",
      "/creative/ifc/insta.png",
      "/creative/ifc/gogreek.png"
    ],
    logo: "/creative/logos/ifc.png",
    instagram: "https://instagram.com/uwifc",
    website: "https://uwifc.com"
  },
  {
    title: "TAEKWONDO",
    subtitle: "HUSKY",
    description:
      "Designed and developed modern rebrand. Grew social media following by 150%. Directed promotional video and drove membership.",
    images: [
      "/creative/htkd/htkd1.png",
      "/placeholder.svg?height=600&width=800&text=Sensor+Setup",
      "/placeholder.svg?height=600&width=800&text=Visual+Feedback",
      "/placeholder.svg?height=600&width=800&text=User+Interaction",
    ],
    logo: "/creative/logos/htkd1.png",
    instagram: "https://instagram.com/uwhuskytkd",
  },
  {
    title: "NUTRIDASH",
    subtitle: "",
    description:
      "Magazine layout and typography for quarterly publication, featuring innovative grid systems and experimental typography. Each issue explores the intersection of design, technology, and culture through thoughtful visual storytelling.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Cover+Design",
      "/placeholder.svg?height=600&width=800&text=Grid+System",
      "/placeholder.svg?height=600&width=800&text=Typography",
      "/placeholder.svg?height=600&width=800&text=Layout+Spreads",
    ],
    logo: "/creative/logos/ndash.png",
    figma: "https://www.figma.com/proto/wGChXh1BkksK1kKtYVBn0R/NutriDash-Team---N2?node-id=568-1306&p=f&t=GFBUsYC1OIs5MRxA-0&scaling=scale-down&content-scaling=fixed&page-id=568%3A1293&starting-point-node-id=568%3A1306"
  },
  {
    title: "TABLE TOGETHER",
    subtitle: "",
    description:
      "Developed interactive website allowing UW students to explore the best food around Seattle by small, family-owned restaurants. Mobile-first design paradigm and accessibility compliant.",
    images: [
      "/creative/tt/tt1.png",
      "/creative/tt/tt2.png",
      "/placeholder.svg?height=600&width=800&text=Project+Gallery",
      "/placeholder.svg?height=600&width=800&text=Interactive+Features",
    ],
    logo: "/creative/logos/tt3.png",
    website: "https://info-340---table-together.firebaseapp.com/main-page"
  },
]

export default function CreativeWork({ creativeWorkRef }: CreativeWorkProps) {
  return (
    <section ref={creativeWorkRef} className="min-h-screen">
      <div className="text-center py-12">
        <TiltCard className="bg-black-800/80 backdrop-blur-sm p-8 md:px-50 m-3 rounded-2xl border border-gray-700/50 inline-block">
          <h2 className="text-6xl font-black mb-0 text-white">DESIGN WORK</h2>
        </TiltCard>
      </div>

      {creativeProjects.map((project, projectIndex) => (
        <div key={projectIndex} className="relative min-h-[calc(100vh*4)]">
          {/* Project Container */}
          <div className={`flex w-full max-w-[2000px] mx-auto ${projectIndex % 2 === 0 ? "" : "flex-row-reverse"}`}>
            {/* Sticky Description */}
            <div className="w-1/2 h-screen sticky top-0">
              <div className="flex items-center justify-center h-full p-10">
                <div className="max-w-lg bg-neutral-800/40 backdrop-blur-md p-14 rounded-1xl">
                  <Image 
                    src={project.logo} 
                    alt={`${project.title} Logo`} 
                    className={`w-48 h-48 object-contain -my-8 ${projectIndex % 2 === 0 ? 'ml-0' : 'ml-auto'}`}
                    width={192}
                    height={192}
                  />
                  <div className={`${projectIndex % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h4 className="text-2xl font-medium text-white mb-1">{project.subtitle}</h4>
                    <h3 className="text-5xl font-bold mb-2 leading-none text-white">{project.title}</h3>
                  </div>
                  <p className={`text-1xl text-neutral-300 font-light leading-normal mb-6`}>{project.description}</p>
                  
                  {/* Links Section */}
                  <div className={`flex gap-4 ${projectIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {project.instagram && (
                      <a 
                        href={project.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-7 h-7" />
                      </a>
                    )}
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Website"
                      >
                        <Globe className="w-7 h-7" />
                      </a>
                    )}
                    {project.figma && (
                      <a 
                        href={project.figma} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Figma"
                      >
                        <Figma className="w-7 h-7" />
                      </a>
                    )}
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Scrollable Images */}
            <div className="w-1/2">
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className="bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-contain"
                    width={800}
                    height={600}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
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