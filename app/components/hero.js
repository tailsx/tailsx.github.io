"use client"
import React from "react"
import Headshot from "./headshot"
import { TechStack } from "./techStack"

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl">
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:leading-none">
              Ordinary Name,
              <br /> Extraordinary Value
            </h1>
            <p className="text-2xl text-neutral">{`Hi I'm David Chen, a Frontend Engineer currently based in Bay Area.`}</p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute z-0">
              <div className="w-60 h-60 bg-white rounded-full animate-ping-single"></div>
            </div>
            <div className="relative z-10 animate-wiggle-and-bounce">
              <Headshot size="lg" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold">Tech Stack:</p>
          <TechStack />
        </div>
      </div>
    </div>
  )
}
