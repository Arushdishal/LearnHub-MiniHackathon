import { features } from "../../data/features";
import FeatureCard from "./FeatureCard";

const FeaturedCourses = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Why Choose LearnHub?
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Everything you need to build your career.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;