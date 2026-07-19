import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
