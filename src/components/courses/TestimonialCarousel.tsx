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
      <div className="overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white p-[8px]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 p-[8px]">
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
            className={`h-[10px] rounded-full transition-all ${
              index === activeIndex ? "w-[30px] bg-[#3563E9]" : "w-[10px] bg-[#D1D5DB]"
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
