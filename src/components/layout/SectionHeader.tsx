import React from 'react'
import DecoDivider from '../common/DecoDivider'

interface SectionHeaderProps {
  header: string
  description: string
}

const SectionHeader = ({ header, description }: SectionHeaderProps) => {
  return (
    <div className='container max-w-4xl text-center mb-20'>
      <h1 className='font-amatic font-bold text-3xl md:text-4xl lg:text-5xl mb-4 mt-8'>{header} </h1>
      <DecoDivider className='mb-4' />
      <p className='text-gray-400 font-amatic text-lg md:text-xl lg:text-2xl mb-4'>{description}</p>
    </div>
  )
}

export default SectionHeader