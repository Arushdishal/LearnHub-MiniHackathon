import type { Testimonial } from "../types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "maria",
    name: "Maria Chen",
    role: "Product Designer",
    company: "Northstar Labs",
    quote:
      "The course structure made it easy to turn fuzzy ideas into products I could ship with confidence.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: "jordan",
    name: "Jordan Ellis",
    role: "Frontend Engineer",
    company: "Brightline",
    quote:
      "I loved how the lessons connected theory to practical implementation without overwhelming me.",
    rating: 5,
    avatar: "JE",
  },
  {
    id: "sofia",
    name: "Sofia Alvarez",
    role: "Operations Lead",
    company: "Lumen Studio",
    quote:
      "The storytelling module helped our team present insights in a way that actually changed decisions.",
    rating: 5,
    avatar: "SA",
  },
];
