import type { PricingPlan } from "../types/course";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for curious learners who want a solid foundation.",
    price: "$29",
    billing: "/month",
    features: ["Access to beginner courses", "Weekly practice prompts", "Community forum"],
    ctaLabel: "Start learning",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Ideal for professionals accelerating their next career move.",
    price: "$79",
    billing: "/month",
    features: ["Everything in Starter", "Live workshops", "Certificate completion badges"],
    highlighted: true,
    ctaLabel: "Choose Pro",
  },
  {
    id: "team",
    name: "Team",
    description: "For growing teams building shared capabilities and momentum.",
    price: "$199",
    billing: "/month",
    features: ["Everything in Pro", "Team dashboards", "Dedicated onboarding support"],
    ctaLabel: "Book a demo",
  },
];
