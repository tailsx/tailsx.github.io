import { Button } from "@/components/ui/button";

const FEATURES_FREE = [
  { title: "No Signup", description: "Browse freely, no accounts or subscriptions required." },
  { title: "Unlimited Access", description: "Enjoy unlimited access to all public projects." }
];

const FEATURES_ENTERPRISE = [
  { title: "Onsite Support", description: "Receive specialized, in-person support directly in your operational environment." },
  { title: "Prioritized Communication", description: "Enjoy front-of-the-line responses for your most critical inquiries." },
  { title: "Amazing Quality", description: "Experience top-tier code quality, ensuring maintainability and scalability." },
  { title: "Seamless Integration", description: "Integrate effortlessly and efficiently into your existing tech stack and workflow." },
  { title: "Tailored Solutions", description: "Get solutions customized to your project's unique requirements." }
];

export default function DavidSubscription() {
  return (
    <div className="flex flex-col w-full bg-secondary py-8 px-4 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-4 text-primary">Choose your plan</h3>
      <div className="flex flex-col md:flex-row gap-2">
        <Card title="Free Tier" cta="Try for Free">
          <ListFeatures list={FEATURES_FREE} />
        </Card>
        <Card title="Enterprise Tier" cta="Get Started">
          <ListFeatures list={FEATURES_ENTERPRISE} />
        </Card>
      </div>
    </div>
  );
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
  );
}

function Card(props) {
  const { title, children, cta } = props;
  return (
    <div className="flex flex-col bg-primary text-secondary w-full rounded-lg px-4 py-4 lg:px-6">
      <span className="text-2xl font-black">{title}</span>
      <div className="flex-grow mt-2 mb-4">{children}</div>
      <div className="py-2">
        <Button variant="secondary">{cta}</Button>
      </div>
    </div>
  );
}
