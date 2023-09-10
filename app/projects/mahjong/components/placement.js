import ProfilePic from "@/app/components/shared/profilePic"
import Image from "next/image"

const VARIANTS = {
  first: "gold",
  second: "silver",
  third: "bronze",
}

export default function Placement(props) {
  const { variant } = props

  let style = ""
  if (variant === "first") {
    style += "bg-yellow-400"
  } else if (variant === "second") {
    style += "bg-gray-300"
  } else if (variant === "third") {
    style += "bg-yellow-600"
  } else {
    style += "bg-black"
  }

  return (
    <div>
      <span></span>
      <div className="">
        <Image src="/profile-placeholder.svg" alt="player" width={60} height={60} />
      </div>
    </div>
  )
}
