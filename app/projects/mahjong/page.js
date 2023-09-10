"use client"
import Profile from "@/app/components/shared/profile"
import Graph from "./components/graph"
import ProfilePic from "@/app/components/shared/profilePic"
import Placement from "./components/placement"


export default function Mahjong() {
  return (
    <div className="theme-mahjong bg-primary min-w-screen min-h-screen">
      <UserProfile />
      <LastMatch />
      <Graph />
    </div>
  )
}

function LastMatch() {
  return (
    <div>
      <span>Last Match</span>
      <div>
        <div>
          <span>1st Place</span>
          <span>+30</span>
        </div>
        <div></div>
        <Placement />
      </div>
    </div>
  )
}

function UserProfile() {
  return (
    <div>
      <Profile>
        <Profile.Header>
          <Profile.Pic src="/profile.jpg" alt="headshot" />
        </Profile.Header>
        <Profile.Body>
          <Profile.Title>David Chen</Profile.Title>
          <Profile.Section title="Last Match">
            <p>yoyo</p>
          </Profile.Section>
        </Profile.Body>
      </Profile>
    </div>
  )
}
