import type { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
          <p className="text-sm text-slate-600">
            {testimonial.role} • {testimonial.company}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-700">“{testimonial.quote}”</p>

      <div className="mt-4 text-sm font-medium text-amber-500" aria-label={`${testimonial.rating} out of 5 stars`}>
        {"★".repeat(testimonial.rating)}
        {"☆".repeat(5 - testimonial.rating)}
      </div>
    </article>
  );
};

export default TestimonialCard;
