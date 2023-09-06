import Image from "next/image"

export default function Experience({ title, imgTitle, img, description, children, date }) {
  return (
    <article className="flex flex-col">
      <div className="shrink-0 mr-2">
        <div>
          <Image src={img} alt="NewsBreak Logo" width={64} height={64} />
        </div>
        <div>
          <span>{imgTitle}</span>
          <span className="text-sm">{date}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold">{title}</span>
        <span>{description}</span>
        {children}
      </div>
    </article>
  )
}
