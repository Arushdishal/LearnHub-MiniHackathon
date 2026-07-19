import { Check, Star } from "lucide-react";
import type { PricingPlan } from "../../types/course";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "16px",
        backgroundColor: "#fff",
        border: plan.highlighted ? "2px solid #3563E9" : "1px solid #E5E7EB",
        boxShadow: plan.highlighted ? "0 4px 24px rgba(53, 99, 233, 0.1)" : "none",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = plan.highlighted
          ? "0 12px 40px rgba(53, 99, 233, 0.15)"
          : "0 8px 30px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = plan.highlighted
          ? "0 4px 24px rgba(53, 99, 233, 0.1)"
          : "none";
      }}
    >
      {plan.highlighted && (
        <div
          style={{
            backgroundColor: "#3563E9",
            textAlign: "center",
            padding: "6px 0",
            fontSize: "10px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <Star style={{ width: "10px", height: "10px", fill: "#fff", color: "#fff" }} strokeWidth={3} /> MOST POPULAR
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "28px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#111827", margin: 0 }}>
          {plan.name}
        </h3>

        <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6B7280", marginTop: "8px" }}>
          {plan.description}
        </p>

        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginTop: "20px" }}>
          <span style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-1px", color: "#111827", lineHeight: 1 }}>
            {plan.price}
          </span>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#6B7280", marginBottom: "6px" }}>
            {plan.billing}
          </span>
        </div>

        <div style={{ height: "1px", backgroundColor: "#F3F4F6", margin: "20px 0" }} />

        <ul style={{ flex: 1, listStyle: "none", padding: 0, margin: 0 }}>
          {plan.features.map((feature) => (
            <li
              key={feature}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <Check
                style={{
                  width: "14px",
                  height: "14px",
                  marginTop: "2px",
                  flexShrink: 0,
                  color: "#3563E9",
                }}
                strokeWidth={3}
              />
              <span style={{ fontSize: "13px", lineHeight: 1.5, color: "#4B5563" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "12px",
            borderRadius: "24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s",
            ...(plan.highlighted
              ? {
                  backgroundColor: "#3563E9",
                  color: "#fff",
                  border: "none",
                }
              : {
                  backgroundColor: "#fff",
                  color: "#111827",
                  border: "1px solid #E5E7EB",
                }),
          }}
        >
          {plan.ctaLabel}
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
