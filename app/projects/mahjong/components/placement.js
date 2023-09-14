import ProfilePic from "@/app/components/shared/profilePic"
import Image from "next/image"

const VARIANTS = {
  first: "gold",
  second: "silver",
  third: "bronze",
}

export default function Placement(props) {
  const { variant, value } = props

  let style = ""
  let placement = "n/a"
  let width = 60
  let height = 60
  let size = "base"
  if (variant === "first") {
    style += "text-yellow-400"
    placement = "1st"
    width = 80
    height = 80
    size = "large"
  } else if (variant === "second") {
    style += "text-gray-300"
    placement = "2nd"
  } else if (variant === "third") {
    style += "text-yellow-600"
    placement = "3rd"
  } else {
    style += "text-black"
    placement = "4th"
  }

  return (
    <div className="flex">
      <div className="flex flex-col justify-end mr-1 text-right">
        <span className={`${style} font-bold text-xl`}>{value}</span>
        <span className="text-sm">{placement}</span>
      </div>
      <div className="">
        <Image src="/profile-placeholder.svg" alt="player" width={width} height={height} />
      </div>
    </div>
  )
}
