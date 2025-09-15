"use client"

import { cn } from "@/lib/utils"

interface LineShadowTextProps {
  children: React.ReactNode
  className?: string
  shadowColor?: string
}

export function LineShadowText({ 
  children, 
  className,
  shadowColor = "orange"
}: LineShadowTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        className
      )}
      style={{
        textShadow: `
          0 0 10px rgba(249, 115, 22, 0.5),
          0 0 20px rgba(249, 115, 22, 0.3),
          0 0 30px rgba(249, 115, 22, 0.2),
          2px 2px 4px rgba(0, 0, 0, 0.3)
        `,
      }}
    >
      {children}
      <span 
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}