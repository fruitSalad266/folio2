"use client"

import { ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TiltCard from "../../components/TiltCard"

export default function HeroCard() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-2xl text-center space-y-6">

        <TiltCard 
          className="w-full text-center space-y-4 
            bg-neutral-900/20 backdrop-blur-sm 
            p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-center text-white font-bold">
            MATTHEW NGUYEN
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 font-light text-center leading-relaxed">
            <a href="https://ischool.uw.edu" target="_blank" className="hover:text-white transition-colors">
              Informatics
            </a> + Business at the{" "}
            <a href="https://uw.edu" target="_blank" className="hover:text-white transition-colors">
              University of Washington
            </a>
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-8 items-center justify-center py-4">
            <a 
              href="https://github.com/fruitsalad266" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mattcng" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mattcng9@uw.edu" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4">           
            <Link href="/">
              <Button 
                variant="outline" 
                size="sm" 
                className="group bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
              >
                View Full Portfolio
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </TiltCard>
      </div>
    </section>
  )
} 