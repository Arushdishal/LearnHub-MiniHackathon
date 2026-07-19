import type { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article style={{ padding: "4px 0" }}>
      {/* Avatar + Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#3563E9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
            {testimonial.name}
          </h3>
          <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
            {testimonial.role} · <span style={{ color: "#3563E9", fontWeight: 500 }}>{testimonial.company}</span>
          </p>
        </div>
      </div>

      {/* Quote */}
      <p style={{ fontSize: "14px", fontStyle: "italic", lineHeight: 1.7, color: "#4B5563", marginTop: "18px" }}>
        "{testimonial.quote}"
      </p>

      {/* Stars */}
      <div style={{ display: "flex", gap: "2px", marginTop: "14px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: "14px",
              color: i < testimonial.rating ? "#F59E0B" : "#D1D5DB",
            }}
          >
            ★
          </span>
        ))}
      </div>
    </article>
  );
};

export default TestimonialCard;
