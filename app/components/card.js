import { Button } from "@/components/ui/button"

export default function Card(props) {
  const { title, children, cta, onClick } = props

  return (
    <div className="flex flex-col bg-primary text-accent w-full rounded-lg px-4 py-4 lg:px-8">
      <span className="text-2xl font-bold">{title}</span>
      <div className="flex-grow mt-2 mb-4">{children}</div>
      <div className="py-2">
        <Button variant="secondary" onClick={onClick}>
          {cta}
        </Button>
      </div>
    </div>
  )
}
