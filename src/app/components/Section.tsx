'use client'

import React, { forwardRef } from 'react'

type Props = {
  children?: React.ReactNode
  py?: '0' | '20'
  id?: string
  className?: string
  sectionTitle?: string
  sectionDesc?: string
}

const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, py = '0', id, className, sectionTitle, sectionDesc }, ref) => {

    const paddingY =
      py === '20' ? 'md:py-20 py-10' : 'py-0'

    return (
      <section
        ref={ref}
        id={id}
        className={`flex relative w-full overflow-hidden ${paddingY} ${className || ''}`}
      >
        <div className="container mx-auto px-4 flex flex-col">
          {(sectionTitle) && (
            <div className='flex flex-col mb-8 max-w-2xl mx-auto text-center'>
              <h2 className='text-5xl font-medium text-[#FAFAFA]'>{sectionTitle}</h2>
              {(sectionDesc) && (
                <p className='text-xl text-[#A1A1A1] mt-4'>{sectionDesc}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'
export default Section