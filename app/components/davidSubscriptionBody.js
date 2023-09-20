"use client"

import Card from "./card"

const FEATURES_FREE = [
  { title: "No Signup", description: "Browse freely, no accounts or subscriptions required." },
  { title: "Unlimited Access", description: "Enjoy unlimited access to all public projects." },
]

const FEATURES_ENTERPRISE = [
  {
    title: "Onsite Support",
    description: "Receive specialized, in-person support directly in your operational environment.",
  },
  {
    title: "Prioritized Communication",
    description: "Enjoy front-of-the-line responses for your most critical inquiries.",
  },
  {
    title: "Amazing Quality",
    description: "Experience top-tier code quality, ensuring maintainability and scalability.",
  },
  {
    title: "Seamless Integration",
    description: "Integrate effortlessly and efficiently into your existing tech stack and workflow.",
  },
  { title: "Tailored Solutions", description: "Get solutions customized to your project's unique requirements." },
]

export default function DavidSubscriptionBody() {
  const handleDownload = () => {
    const pdfPath = "/resume.pdf"
    window.location.href = pdfPath
  }

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Card title="Free Tier" cta="Try for Free">
        <ListFeatures list={FEATURES_FREE} />
      </Card>
      <Card title="Enterprise Tier" cta="Get Started" onClick={handleDownload}>
        <ListFeatures list={FEATURES_ENTERPRISE} />
      </Card>
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
