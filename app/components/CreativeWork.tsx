'use client'

interface CreativeWorkProps {
  creativeWorkRef: React.RefObject<HTMLDivElement | null>
}

interface CreativeProject {
  title: string
  subtitle: string
  description: string
  images: string[]
  logo: string
}

const creativeProjects: CreativeProject[] = [
  {
    title: "INTERFRATERNITY COUNCIL",
    subtitle: "UNIVERSITY OF WASHINGTON",
    description:
      "Developed + promoted coherent IFC brand representing 25 fraternities at the University of Washington.",
    images: [
      "/creative/fpr1.png",
      "/creative/gogreek.png",
      "/creative/sticker.png",
      "/creative/exec.png",
      "/creative/insta.png",
    ],
    logo: "/creative/logos/ifc.png"
  },
  {
    title: "TAEKWONDO",
    subtitle: "HUSKY",
    description:
      "Motion-responsive digital art piece for gallery exhibition, combining physical sensors with real-time visual feedback. The installation creates an immersive environment that responds to visitor movement and interaction.",
    images: [
      "/creative/htkd1.png",
      "/placeholder.svg?height=600&width=800&text=Sensor+Setup",
      "/placeholder.svg?height=600&width=800&text=Visual+Feedback",
      "/placeholder.svg?height=600&width=800&text=User+Interaction",
    ],
    logo: "/creative/logos/htkd1.png"
  },
  {
    title: "Editorial Design",
    subtitle: "MAGAZINE LAYOUT",
    description:
      "Magazine layout and typography for quarterly publication, featuring innovative grid systems and experimental typography. Each issue explores the intersection of design, technology, and culture through thoughtful visual storytelling.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Cover+Design",
      "/placeholder.svg?height=600&width=800&text=Grid+System",
      "/placeholder.svg?height=600&width=800&text=Typography",
      "/placeholder.svg?height=600&width=800&text=Layout+Spreads",
    ],
    logo: "/placeholder.svg?height=600&width=800&text=Logo+Design"
  },
  {
    title: "Digital Experience",
    subtitle: "INTERACTIVE WEBSITE",
    description:
      "3D interactive website for architectural firm, showcasing projects through WebGL and immersive storytelling techniques. The experience allows users to explore architectural spaces in an intuitive and engaging way.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Homepage",
      "/placeholder.svg?height=600&width=800&text=3D+Navigation",
      "/placeholder.svg?height=600&width=800&text=Project+Gallery",
      "/placeholder.svg?height=600&width=800&text=Interactive+Features",
    ],
    logo: "/placeholder.svg?height=600&width=800&text=Logo+Design"
  },
]

export default function CreativeWork({ creativeWorkRef }: CreativeWorkProps) {
  return (
    <section ref={creativeWorkRef} className="min-h-screen">
      <div className="text-center py-16">
        <div className="bg-black-800/80 backdrop-blur-sm p-8 m-3 rounded-2xl border border-gray-700/50 inline-block">
          <h2 className="text-6xl font-black mb-0 text-white">DESIGN WORK</h2>
        </div>
      </div>

      {creativeProjects.map((project, projectIndex) => (
        <div key={projectIndex} className="relative min-h-[400vh]">

          {/* Project Container */}
          <div className={`flex w-full max-w-[2000px] mx-auto ${projectIndex % 2 === 0 ? "" : "flex-row-reverse"}`}>
            {/* Sticky Description */}
            <div className="w-1/2 h-screen sticky top-0">
              <div className="flex items-center justify-center h-full p-16">
                <div className="max-w-lg bg-neutral-800/40 backdrop-blur-md p-8 rounded-1xl">
                  <img 
                    src={project.logo} 
                    alt={`${project.title} Logo`} 
                    className={`w-48 h-48 object-contain -mb-4 ${projectIndex % 2 === 0 ? 'ml-0' : 'ml-auto'}`}
                  />
                  <div className={`${projectIndex % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h4 className="text-2xl font-medium text-white mb-1">{project.subtitle}</h4>
                    <h3 className="text-5xl font-bold mb-2 leading-none text-white">{project.title}</h3>
                  </div>
                  <p className={`text-1xl text-neutral-300 font-light leading-normal`}>{project.description}</p>
                </div>
              </div>
            </div>

            {/* Scrollable Images */}
            <div className="w-1/2">
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} className=" bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-contain"
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