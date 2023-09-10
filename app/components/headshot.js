import Image from "next/image"
import ProfilePic from "./shared/profilePic"

export default function Headshot() {
  return <ProfilePic src="/profile.jpg" alt="David Chen head shot" />
}
