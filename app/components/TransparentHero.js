"use client"
import React from "react"
import Headshot from "./headshot"

export default function TransparentHero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-1/2 left-0 animate-wiggle-and-bounce z-10">
        <Headshot />
      </div>
      <div className="absolute top-1/2 left-0">
        <div className="w-40 h-40 bg-white rounded-full animate-ping-single"></div>
      </div>
    </div>
  )
}
