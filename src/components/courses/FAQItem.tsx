import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem as FaqItemType } from "../../types/faq";

interface FAQItemProps {
  item: FaqItemType;
}

const FAQItem = ({ item }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900">{item.question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden text-sm leading-7 text-slate-600">{item.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
