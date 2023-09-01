import Button from "./button"

export default function DavidSubscription() {
  return (
    <div className="flex flex-col w-full bg-primary">
      <h2>Want to Hire?</h2>
      <div className="flex flex-col md:flex-row gap-2">
        <Card title="Free Tier" cta="check"></Card>
        <Card title="Paid Tier" cta="f"></Card>
      </div>
    </div>
  )
}

function Card(props) {
  const { title, children, cta } = props
  return (
    <div className="bg-secondary text-primary w-full rounded-lg px-2 py-4">
      <span className="text-2xl font-black">{title}</span>
      <div>{children}</div>
      <div className="py-2">
        <Button variant="accent">{cta}</Button>
      </div>
    </div>
  )
}
