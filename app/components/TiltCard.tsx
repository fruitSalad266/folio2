"use client"

import { useState, ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  sensitivity?: number
  perspective?: number
  contentZ?: number
}

export default function TiltCard({ 
  children, 
  className = "", 
  sensitivity = 75,
  perspective = 1000,
  contentZ = 20
}: TiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate rotation based on mouse position relative to center
    const rotateX = -(e.clientY - centerY) / (sensitivity * 0.25)
    const rotateY = -(centerX - e.clientX) / sensitivity
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div 
      className={`transition-transform duration-200 ease-out shadow-2xl ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ transform: `translateZ(${contentZ}px)` }}>
        {children}
      </div>
    </div>
  )
} 