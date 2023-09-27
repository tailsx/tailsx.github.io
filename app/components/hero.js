"use client"
import React from "react"
import Headshot from "./headshot"
import { TechStack } from "./techStack"

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-xl p-4 bg-primary text-secondary">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-20 my-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:leading-none">
              Ordinary Name,
              <br />{" "}
              <span className="bg-gradient-to-r from-accent to-white text-transparent bg-clip-text">
                Extraordinary
              </span>{" "}
              Value
            </h1>
            <p className="text-base md:text-2xl text-neutral">{`Hi I'm David Chen, a Frontend Engineer currently based in Bay Area.`}</p>
          </div>
          <div className="relative flex justify-center items-center py-4">
            <div className="absolute z-0">
              <div className="w-60 h-60 bg-white rounded-full animate-ping-single"></div>
            </div>
            <div className="relative z-10 animate-wiggle-and-bounce border-4 border-white rounded-full">
              <Headshot size="lg" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="hidden lg:block font-bold">Tech Stack:</p>
          <TechStack />
        </div>
      </div>
    </div>
  )
}
