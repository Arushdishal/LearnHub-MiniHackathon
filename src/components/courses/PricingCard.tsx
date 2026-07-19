import type { PricingPlan } from "../../types/course";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <article
      className={`rounded-[16px] border p-[32px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
        plan.highlighted
          ? "border-[#3563E9] bg-gradient-to-br from-[#3563E9] to-[#2850C8] text-white"
          : "border-[#F3F4F6] bg-white text-[#111827]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-[700]">{plan.name}</h3>
        {plan.highlighted && (
          <span className="rounded-full bg-white/20 px-[10px] py-[6px] text-[12px] font-semibold">
            Best value
          </span>
        )}
      </div>

      <p className={`mt-3 text-[14px] leading-[1.65] ${plan.highlighted ? "text-blue-50" : "text-[#6B7280]"}`}>
        {plan.description}
      </p>

      <div className="mt-6 flex items-end gap-[4px]">
        <span className="text-[32px] font-[700]">{plan.price}</span>
        <span className={`pb-[2px] text-[14px] ${plan.highlighted ? "text-blue-100" : "text-[#9CA3AF]"}`}>
          {plan.billing}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-[8px] text-[14px] leading-[1.6]">
            <span className={`mt-[7px] h-[8px] w-[8px] shrink-0 rounded-full ${plan.highlighted ? "bg-white" : "bg-[#3563E9]"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-full px-[16px] py-[12px] text-[14px] font-semibold transition ${
          plan.highlighted
            ? "bg-white text-[#3563E9] hover:bg-[#F8FAFF]"
            : "bg-[#111827] text-white hover:bg-[#1F2937]"
        }`}
      >
        {plan.ctaLabel}
      </button>
    </article>
  );
};

export default PricingCard;
