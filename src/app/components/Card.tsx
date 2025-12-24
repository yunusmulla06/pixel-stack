'use client'
import Image from 'next/image'
import React from 'react'

type CardContentProps = {
  icon?: string
  title: string
  description: string
  className?: string
  align?: 'start' | 'center'
}

export default function Card({
  icon,
  title,
  description,
  className = "",
  align = 'start',
}: CardContentProps) {
  return (
    <div className={`p-5 border rounded-lg flex flex-col items-${align} gap-4 ${className}`}>
      {icon && (
        <Image 
          src={icon} 
          alt={title} 
          width={40} 
          height={40} 
          className="text-3xl mb-2"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  )
}
