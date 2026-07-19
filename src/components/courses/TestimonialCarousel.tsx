import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.min(testimonials.length, 3));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 p-2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {visibleTestimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
