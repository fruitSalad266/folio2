'use client'

import TiltCard from "./TiltCard"
import Image from "next/image"
import { Instagram, Globe, Figma } from "lucide-react"
import { useState, useEffect } from "react"

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
      "/creative/ifc/exec2.png",
      "/creative/ifc/figma.png",
      "/creative/ifc/insta.png"
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
      "/creative/htkd/insta3.png",
      "/creative/htkd/color.png",
      "/creative/htkd/htkd3.png",
      "/creative/htkd/type.png",
      "/creative/htkd/insta2.png",
    ],
    logo: "/creative/logos/htkd1.png",
    instagram: "https://instagram.com/uwhuskytkd",
  },
  {
    title: "NUTRIDASH",
    subtitle: "",
    description:
      "Mobile delivery app design for older adults and their caretakers to manage and order groceries.",
    images: [
      "/creative/nd/nd1.png",
      "/creative/nd/nd3.png",
      "/creative/nd/nd2.png",
    ],
    logo: "/creative/logos/ndash.png",
    figma: "https://www.figma.com/proto/wGChXh1BkksK1kKtYVBn0R/NutriDash-Team---N2?node-id=568-1306&p=f&t=GFBUsYC1OIs5MRxA-0&scaling=scale-down&content-scaling=fixed&page-id=568%3A1293&starting-point-node-id=568%3A1306"
  },
  {
    title: "TABLE TOGETHER",
    subtitle: "",
    description:
      "Interactive website allowing UW students to explore the food around Seattle by small, family-owned restaurants. Mobile-first design paradigm and accessibility compliant.",
    images: [
      "/creative/tt/tt1.png",
      "/creative/tt/tt2.png",
      "/creative/tt/tt3.png",
    ],
    logo: "/creative/logos/tt3.png",
    website: "https://info-340---table-together.firebaseapp.com/main-page"
  },
]

export default function CreativeWork({ creativeWorkRef }: CreativeWorkProps) {
  const [scrolledProjects, setScrolledProjects] = useState<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const newScrolledProjects = new Set<number>()

      // Check each project's position by finding elements with data-project-index
      document.querySelectorAll('[data-project-index]').forEach((element) => {
        const index = parseInt(element.getAttribute('data-project-index') || '0')
        const rect = element.getBoundingClientRect()
        // If the project has scrolled up significantly (more than 200px from top)
        if (rect.top < -200) {
          newScrolledProjects.add(index)
        }
      })

      setScrolledProjects(newScrolledProjects)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={creativeWorkRef} className="min-h-screen">
      <div className="text-center py-12">
        <TiltCard className="bg-black-800/80 backdrop-blur-sm p-8 md:px-50 m-3 rounded-2xl border border-gray-700/50 inline-block">
          <h2 className="text-6xl font-black mb-0 text-white">DESIGN WORK</h2>
        </TiltCard>
      </div>

      {creativeProjects.map((project, projectIndex) => (
        <div
          key={projectIndex}
          className="relative"
          data-project-index={projectIndex}
        >
          {/* Mobile: Scroll-based Card Shrinking */}
          <div className="md:hidden">
            {/* Sticky Header - shrinks when scrolled */}
            <div className="sticky top-0 z-30 bg-neutral-900/95 backdrop-blur-md border-b border-gray-700/50 mx-2 my-2">
              <div className={`flex items-center p-4 transition-all duration-300 ${
                scrolledProjects.has(projectIndex) ? 'gap-3' : 'gap-0 justify-center'
              }`}>
                <Image
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className={`object-contain transition-all duration-300 ${
                    scrolledProjects.has(projectIndex) ? 'w-12 h-12' : 'w-32 h-32'
                  }`}
                  width={scrolledProjects.has(projectIndex) ? 48 : 128}
                  height={scrolledProjects.has(projectIndex) ? 48 : 128}
                />

                {/* Title and subtitle - always visible but smaller when scrolled */}
                <div className={`text-left transition-all duration-300 ${
                  scrolledProjects.has(projectIndex)
                    ? 'flex-1 ml-0'
                    : 'text-center ml-6 flex-1'
                }`}>
                  <h4 className={`font-medium text-white mb-1 transition-all duration-300 ${
                    scrolledProjects.has(projectIndex) ? 'text-sm' : 'text-xl'
                  }`}>
                    {project.subtitle}
                  </h4>
                  <h3 className={`font-bold leading-tight text-white transition-all duration-300 ${
                    scrolledProjects.has(projectIndex) ? 'text-base' : 'text-3xl mb-3'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Show description and links only when not scrolled */}
                  {!scrolledProjects.has(projectIndex) && (
                    <>
                      <p className="text-base text-neutral-300 font-light leading-relaxed text-center max-w-md mb-4">
                        {project.description}
                      </p>

                      {/* Links Section */}
                      <div className="flex justify-center gap-4">
                        {project.instagram && (
                          <a
                            href={project.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-6 h-6" />
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
                            <Globe className="w-6 h-6" />
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
                            <Figma className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="space-y-4 pb-8">
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full bg-black mx-4 my-2 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    className="w-full h-auto object-contain"
                    width={800}
                    height={600}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden md:block relative min-h-[calc(35vh*4)]">
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
        </div>
      ))}
      <div className="w-full flex justify-center">
        <footer className="mt-6 py-8 w-screen bg-neutral-800/40 backdrop-blur-md p-14 border border-gray-700/50 text-center text-white rounded-none">
          <h2 className="text-4xl font-bold mb-2">
            WORK WITH ME:
          </h2>
          <a
            href="mailto:mattcng9@uw.edu"
            className="text-gray-400 hover:text-white transition-colors font-mono text-lg"
          >
            mattcng9 (at) uw dot edu
          </a>
        </footer>
      </div>
    </section>
  )
} 