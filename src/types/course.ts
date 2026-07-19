export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  originalPrice?: number;
  featured?: boolean;
  tags: string[];
  instructor: string;
  rating: number;
  students: number;
  accent: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  billing: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}
