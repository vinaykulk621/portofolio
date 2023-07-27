import { AboutMe } from '@/components/AboutMe'
import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/Projects'
import { DownArrow } from '@/components/SVG'
import { TechStack } from '@/components/TechStack'
import ThreeD from '@/components/ThreeD'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <ThreeD />
        <div className="bg-gradient-to-b from-simple-black-2 to-simple-black font-spotify">
          <div className="flex h-screen flex-col justify-between">
            <Intro />
            <DownArrow />
          </div>
          <div className="flex h-screen flex-col items-center justify-center space-y-10 p-4 lg:flex-row lg:space-x-14">
            <TechStack />
            <AboutMe />
          </div>
          <Projects />
          <p className="relative bottom-[20%] text-center text-lg text-gray-400">
            Check out this{' '}
            <span className="text-gray-500 hover:text-gray-400">COOL BALL</span>{' '}
            down here that i made
          </p>
        </div>
      </div>
    </>
  )
}
