'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

export default function HeroSection({
  title,
  subtitle,
  buttonLabel,
  buttonLink = "/contact",
}: HeroSectionProps) {
  const router = useRouter();

  return (
      <div className="text-center max-w-[848px] mx-auto">
        <h2 className='text-6xl text-[#FAFAFA]'>{title}</h2>
        {subtitle && <div className='text-xl text-[#A1A1A1] max-w-[700px] mx-auto mt-8'>{subtitle}</div>}
        {buttonLabel && (
          <button
            onClick={() => router.push(buttonLink)}
            className="mt-6 px-6 py-2 bg-linear-to-t from-[#00E5FF] to-[#4C38FF] text-[#171717] rounded-xl text-sm font-medium cursor-pointer"
          >
            {buttonLabel}
          </button>
        )}
        <div className='md:flex hidden shrink-0 -z-10 bg-[#00E5FF] opacity-20 size-96 absolute translate-x-3/5 left-1/3 -top-1/4 rounded-full blur-3xl'></div>
        <div className='md:flex hidden shrink-0 -z-10 bg-[#4C38FF] opacity-20 size-96 absolute -translate-x-1/2 left-1/2 bottom-0 rounded-full blur-3xl'></div>
      </div>
  )
}
