import Image from "next/image"

export default function Experience({ title, imgTitle, img, description, children }) {
  return (
    <article>
      <div>
        <Image src={img} alt="NewsBreak Logo" width={64} height={64} />
        <span>{imgTitle}</span>
      </div>
      <div>
        <span>{title}</span>
        <span>{description}</span>
        {children}
      </div>
    </article>
  )
}
