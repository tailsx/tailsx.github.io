import Image from "next/image"

const TechStack = () => {
  const iconSize = { width: 40, height: 40 }
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      <TechItem src="/html-5.svg" alt="HTML 5 Icon" {...iconSize} />
      <TechItem src="/javascript.svg" alt="JavaScript Icon" {...iconSize} />
      <TechItem src="/nextjs-icon.svg" alt="Next Icon" {...iconSize} />
      <TechItem src="/react.svg" alt="React Icon" {...iconSize} />
      <TechItem src="/tailwindcss-icon.svg" alt="Tailwind Icon" {...iconSize} />
    </div>
  )
}

const TechItem = (props) => {
  return (
    <div className="flex justify-center items-center bg-primary rounded-full drop-shadow-md border-primary border box-border p-2 w-20 h-20">
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  )
}

export { TechStack, TechItem }
