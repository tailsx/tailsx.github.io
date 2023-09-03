import Headshot from "./headshot"

const features = ["React", "Tailwind", "TypeScript", "NextJS", "ExpressJS", "NodeJS"]

export default function DavidFeatures() {
  return (
    <div className="flex flex-col justify-between items-centers max-w-6xl mx-auto py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-4">Professional Features</h3>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Headshot />
        </div>
        <div className="text-secondary flex flex-col grow">
          <div className="relative border rounded-lg my-2 p-4 border-white text-base">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-sm whitespace-nowrap px-2">
              4+ years of experience
            </div>
            <div className="grid grid-cols-2 gap-2 justify-around flex-wrap text-center">
              {features.map((feature, i) => (
                <span key={i} className="font-bold bg-accent text-primary p-2 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <p>Shifted focus to frontend in 2017. Experience in backend as well as well</p>
        </div>
      </div>
    </div>
  )
}
