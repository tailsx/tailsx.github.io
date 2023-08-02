import Link from "next/link"
import { MdOutlineOpenInNew } from "react-icons/md"

export default function Exp({
  company,
  title,
  location,
  description,
  url,
  children,
}) {
  return (
    <article>
      <span>{title}</span>
      <span>
        {company} - <span className="italic">{location}</span>
        <Link href={url}>
          <MdOutlineOpenInNew />
        </Link>
      </span>
      <p>{description}</p>
      <div></div>
      <div>{children}</div>
    </article>
  )
}
