const CARDS = [
  {
    title: "Sociable",
    description: "Values in-person interactions for enhanced teamwork and project cohesion."
  },
  {
    title: "Competitive",
    description: "Exhibits a tenacious drive to excel, equally applicable in games and professional milestones."
  },
  {
    title: "Genuine",
    description: "AI in the name but 100% human — providing uniquely tailored solutions."
  },
  {
    title: "Flexible",
    description: "Adapts to varying tech landscapes with ease, amplifying efficiency and innovation in every project."
  },
  {
    title: "Reliable",
    description: "Delivers consistent quality and timeliness as core features, not optional add-ons."
  },
  {
    title: "Resilient",
    description: "Unfazed by setbacks, rebounds quickly to keep projects on track."
  },
];


export default function DavidCards() {
  return (
    <div>
      <div className="flex flex-col justify-between items-centers max-w-6xl mx-auto py-8 px-4">
        <h3 className="text-3xl font-bold text-center mb-4 text-secondary">Endless Benefits</h3>

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
    <div className="bg-secondary border border-accent rounded-lg p-4">
      <span className="text-xl text-neutral font-bold">{title}</span>
      <p className="text-neutral">{description}</p>
    </div>
  )
}
