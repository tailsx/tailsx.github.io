"use client"
import Graph from "./components/graph"
import ProfilePic from "@/app/components/shared/profilePic"
import Placement from "./components/placement"
import Leaderboard from "./components/leaderboard"
import Section from "@/app/components/shared/section"
import UserProfile from "./components/userProfile"

export default function Mahjong() {
  return (
    <div className="theme-mahjong bg-primary min-w-screen min-h-screen flex flex-col md:flex-row p-2">
      <div className="flex flex-col">
        {/*      <UserProfile /> */}
        <LastMatch />
        <Leaderboard />
      </div>
      <div className="flex flex-grow">
        <Graph />
      </div>
    </div>
  )
}

function LastMatch() {
  return (
    <div className="my-4">
      <span>Latest Match</span>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex justify-center mb-2 item-end">
          <Placement variant="first" value={50} />
        </div>
        <div className="flex justify-between gap-2 items-end">
          <Placement variant="second" value={9} />
          <Placement variant="third" value={-3} />
          <Placement variant="fourth" value={-40} />
        </div>
      </div>
    </div>
  )
}
