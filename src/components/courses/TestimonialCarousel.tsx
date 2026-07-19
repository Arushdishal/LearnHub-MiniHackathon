import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleTestimonials = testimonials.slice(0, 3);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % visibleTestimonials.length);
  }, [visibleTestimonials.length]);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (current) =>
        (current - 1 + visibleTestimonials.length) % visibleTestimonials.length
    );
  }, [visibleTestimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(goNext, 5000);
    return () => window.clearInterval(interval);
  }, [isPaused, goNext]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} style={{ width: "100%", flexShrink: 0 }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #E5E7EB",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#6B7280",
          }}
        >
          <ChevronLeft style={{ width: "16px", height: "16px" }} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {visibleTestimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              style={{
                height: "8px",
                width: index === activeIndex ? "24px" : "8px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                backgroundColor: index === activeIndex ? "#3563E9" : "#D1D5DB",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #E5E7EB",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#6B7280",
          }}
        >
          <ChevronRight style={{ width: "16px", height: "16px" }} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
