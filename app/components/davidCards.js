const CARDS = [
  {
    title: "Versitile",
    description: "Recently doing frontend but can do full stack development as well",
  },
  {
    title: "Sociable",
    description:
      "Sociable without using posting socials. Bowling, golfing, go-karting, having coffee? Message me and lets go",
  },
  {
    title: "Competitive",
    description:
      "Don't like losing and want to be the best. Be it for a team or individually. Love to competite and try and achieve the best",
  },
  {
    title: "Genuine",
    description:
      "The letters a and i in the name, but nothing articial. A person that care for the work and the people who work behind it",
  },
  {
    title: "Growth",
    description: "Always learning. Not afraid to failed and learn from it",
  },
]

export default function DavidCards() {
  return (
    <div>
      <div className="flex flex-col justify-between items-centers max-w-2xl mx-auto py-8">
        <h3 className="text-3xl font-bold text-center ">What you get?</h3>

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
      <span className="text-xl">{title}</span>
      <p className="text-neutral">{description}</p>
    </div>
  )
}
