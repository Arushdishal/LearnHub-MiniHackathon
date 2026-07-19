import {
  BookOpen,
  Award,
  Users,
  Clock,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Live Interactive Classes",
    description:
      "Attend instructor-led sessions with real-time doubt solving and discussions.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Industry Certification",
    description:
      "Earn certificates recognized by leading companies after completion.",
    icon: Award,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 3,
    title: "Expert Mentorship",
    description:
      "Receive career guidance from professionals working in top companies.",
    icon: BookOpen,
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    title: "Flexible Learning",
    description:
      "Learn anytime with recorded lectures and lifetime access.",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
];