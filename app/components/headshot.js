import Image from "next/image"

export default function Headshot() {
  return (
    <picture className="overflow-hidden relative w-40 h-40 rounded-full">
      <Image
        // Increase the scale and position of image while maintaining aspect ratio of image and cropping from parent cotainer
        className="object-cover object-center transform scale-150 translate-x-[10%]"
        src="/profile.jpg"
        alt="David Chen head shot"
        width={480}
        height={720}
      />
    </picture>
  )
}
