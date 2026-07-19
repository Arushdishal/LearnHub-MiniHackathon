import type { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="rounded-[16px] border border-[#F3F4F6] bg-[#F9FAFB] p-[32px]">
      <div className="flex items-center gap-[16px]">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#3563E9] text-[14px] font-semibold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <h3 className="text-[16px] font-[700] text-[#111827]">{testimonial.name}</h3>
          <p className="text-[14px] text-[#6B7280]">
            {testimonial.role} • {testimonial.company}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[14px] leading-[1.7] text-[#6B7280]">“{testimonial.quote}”</p>

      <div className="mt-4 text-[14px] font-medium text-amber-500" aria-label={`${testimonial.rating} out of 5 stars`}>
        {"★".repeat(testimonial.rating)}
        {"☆".repeat(5 - testimonial.rating)}
      </div>
    </article>
  );
};

export default TestimonialCard;
