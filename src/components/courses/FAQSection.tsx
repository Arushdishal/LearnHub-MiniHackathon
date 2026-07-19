import { faqItems } from "../../data/faq";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <div style={{ borderTop: "1px solid #F3F4F6" }}>
      {faqItems.slice(0, 5).map((item) => (
        <FAQItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FAQSection;