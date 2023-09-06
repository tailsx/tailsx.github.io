import Image from "next/image"

export default function Headshot() {
  return (
    <div className="relative w-40 h-40 overflow-hidden rounded-full">
      <picture>
        <Image
          priority
          className="object-cover object-center transform scale-150 translate-x-[10%]"
          src="/profile.jpg"
          alt="David Chen head shot"
          width={480}
          height={720}
        />
      </picture>
    </div>
  )
}
