import Button from "./button"

const FEATURES_FREE = [
  { title: "UI Showcase", description: "Explore the front-end designs that power the toolset." },
  /*   { title: "Sample Data Sets", description: "Understand tool capabilities through predefined data." },
  { title: "Code Snippets", description: "Glimpse the engineering quality through selected code segments." },
  { title: "Component Highlights", description: "Discover the modular architecture and key functionalities." }, */
]

const FEATURES_PAID = [
  {
    title: "Onsite Expertise",
    description: "Benefit from specialized knowledge right in your operational environment.",
  },
  { title: "Priority Communication", description: "Immediate responses to critical inquiries." },
  { title: "Seamless Onboarding", description: "Integrate quickly and efficiently into your existing workflow." },
  {
    title: "Custom Solutions",
    description: "Receive tailor-made code and tool modifications to fit your project needs.",
  },
]

export default function DavidSubscription() {
  return (
    <div className="flex flex-col w-full bg-primary py-8 px-4 max-w-6xl">
      <h3 className="text-3xl font-bold text-center mb-4 text-secondary">Choose your plan</h3>
      <div className="flex flex-col md:flex-row gap-2">
        <Card title="Free Tier" cta="Try for Free">
          <ListFeatures list={FEATURES_FREE} />
        </Card>
        <Card title="Enterprise Tier" cta="Get Started">
          <ListFeatures list={FEATURES_PAID} />
        </Card>
      </div>
    </div>
  )
}

function ListFeatures(props) {
  return (
    <ul className="list-disc list-outside ml-4">
      {props.list.map((feature, i) => (
        <li key={i}>
          <span className="font-bold">{`${feature.title}: `}</span>
          <span>{feature.description}</span>
        </li>
      ))}
    </ul>
  )
}

function Card(props) {
  const { title, children, cta } = props
  return (
    <div className="flex flex-col bg-secondary text-primary w-full rounded-lg px-2 py-4">
      <span className="text-2xl font-black">{title}</span>
      <div className="flex-grow">{children}</div>
      <div className="py-2">
        <Button variant="primary">{cta}</Button>
      </div>
    </div>
  )
}
