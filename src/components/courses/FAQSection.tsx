import { faqItems } from "../../data/faq";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Common questions before you begin.
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {faqItems.slice(0, 5).map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;