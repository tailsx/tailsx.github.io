const CARDS = [
  {
    title: "Sociable",
    description: "Enhances teamwork through in-person interactions.",
  },
  {
    title: "Driven",
    description: "Tenacious drive to excel in all endeavors.",
  },
  {
    title: "Unique",
    description: "Delivers tailored, human-centric solutions.",
  },
  {
    title: "Adaptable",
    description: "Navigates varying tech landscapes with ease.",
  },
  {
    title: "Steady",
    description: "Consistent in delivering quality and timely results.",
  },
  {
    title: "Resilient",
    description: "Quickly rebounds from setbacks to keep projects on track.",
  },
]

export default function DavidCards() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center max-w-6xl mx-auto py-8 px-4">
        <h3 className="text-3xl font-bold text-center mb-4 text-secondary">Core Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {CARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card(props) {
  const { title, description } = props
  return (
    <div className="bg-secondary rounded-md p-4">
      <span className="text-xl text-neutral font-bold">{title}</span>
      <p className="text-neutral">{description}</p>
    </div>
  )
}
