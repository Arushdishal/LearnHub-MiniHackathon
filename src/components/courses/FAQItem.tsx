import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem as FaqItemType } from "../../types/faq";

interface FAQItemProps {
  item: FaqItemType;
}

const FAQItem = ({ item }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[16px] border border-[#F3F4F6] bg-[#F9FAFB] px-[24px] py-[20px] transition-all duration-300">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-[16px] font-[700] text-[#111827]">{item.question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#6B7280] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden text-[14px] leading-[1.7] text-[#6B7280]">{item.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
