import Image from "next/image"
import ProfilePic from "./shared/profilePic"

export default function Headshot(props) {
  return <ProfilePic {...props} src="/profile.jpg" alt="David Chen head shot" />
}
