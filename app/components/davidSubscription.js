import Button from "./button"

export default function DavidSubscription() {
  return (
    <div className="flex flex-col w-full bg-primary py-8 px-4 max-w-6xl">
      <h3 className="text-3xl font-bold text-center mb-4">Select your plan</h3>
      <div className="flex flex-col md:flex-row gap-2">
        <Card title="Entry Plan" cta="check">
          <ul>
            <li>Use of projects</li>
            <li></li>
          </ul>
        </Card>
        <Card title="Enterprise Plan" cta="Get Started">
          <ul>
            <li>Member benefits: Possible Mochi donuts</li>
            <li>Leverage experience to recreate pages</li>
          </ul>
        </Card>
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
