import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem as FaqItemType } from "../../types/faq";

interface FAQItemProps {
  item: FaqItemType;
}

const FAQItem = ({ item }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #F3F4F6",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "14px 0",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#111827" }}>
          {item.question}
        </span>
        <ChevronDown
          style={{
            width: "18px",
            height: "18px",
            color: "#9CA3AF",
            flexShrink: 0,
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#6B7280",
              paddingBottom: "14px",
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
