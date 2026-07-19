import { faqItems } from "../../data/faq";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="mx-auto max-w-[1200px] px-[32px]">
        <div className="max-w-[620px]">
          <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#3563E9]">FAQ</p>
          <h2 className="mt-3 text-[32px] font-[700] leading-[1.2] text-[#111827]">
            Common questions before you begin.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.slice(0, 5).map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;