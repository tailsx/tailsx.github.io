import { Button } from "@/components/ui/button"
import Card from "./card"
import DavidSubscriptionBody from "./davidSubscriptionBody"

export default function DavidSubscription() {


  return (
    <div className="flex flex-col w-full bg-secondary py-8 px-4 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-4 lg:mb-8 text-primary">Choose your plan</h3>
      <DavidSubscriptionBody />
    </div>
  )
}
