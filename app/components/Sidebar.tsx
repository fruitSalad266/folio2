import { ChevronRight, ChevronLeft } from "lucide-react"

interface SidebarProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  roles?: ExperienceItem[]; // For multiple roles at the same company
}

const experiences: ExperienceItem[] = [
  {
    title: "Systems/Data Analyst",
    company: "UW Research Compliance",
    period: "2023 - Present",
    description: "I used Tableau, Power BI and Excel to generate useful visualizations and projections of workload. I also automated various processes with Python and pulled data from a central SQL server."
  },
  {
    title: "Developer",
    company: "Stealth",
    period: "2024 - Present",
    description: "50m ARR, 1-4b Seed A. Email for details."
  },
  {
    title: "Junior Partner",
    company: "8VC",
    period: "2025 - Present",
    description: "Changing the world"
  },
  {
    title: "FDSE",
    company: "Palantir",
    period: "2023 - 2025",
    description: "Worked with clients to custom integrate Foundry products",
    roles: [
      {
        title: "FDSE",
        company: "Palantir",
        period: "2023 - 2024",
        description: "Developed and maintained core platform features"
      },
      {
        title: "Project Manager",
        company: "Palantir",
        period: "2024 - 2025",
        description: "Foundry"
      }
    ]
  }
];

export default function Sidebar({ sidebarCollapsed, toggleSidebar }: SidebarProps) {
  const renderExperience = (exp: ExperienceItem, index: number) => {
    return (
      <div key={index} className="mb-6 last:mb-0">
        <h3 className="font-medium text-sm text-white">{exp.title}</h3>
        <p className="text-xs text-gray-400 mb-2">{exp.company} • {exp.period}</p>
        <p className="text-xs text-gray-300 leading-relaxed">{exp.description}</p>
        
        {exp.roles && (
          <div className="mt-3 ml-4 border-l border-gray-700/50 pl-4 space-y-4">
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h4 className="font-medium text-xs text-white">{role.title}</h4>
                <p className="text-xs text-gray-400 mb-1">{role.period}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-black-800/90 backdrop-blur-sm border-r border-gray-700/50 overflow-y-auto z-20 transition-all duration-300 
        ${sidebarCollapsed ? "w-2 md:w-16" : "w-full md:w-1/3 lg:w-1/4"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-md cursor-pointer transition-colors z-20 border border-gray-700/80"
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
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => renderExperience(exp, index))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-4">Contact</h2>
            <p className="text-sm leading-relaxed text-gray-200">The best way to contact me is through my email: <a href="mailto:mattcng9@uw.edu" className="text-grey-400 hover:text-white transition-colors">mattcng9 (at) uw dot edu</a></p>
          </div>
        </div>
      </div>
    </div>
  )
} 