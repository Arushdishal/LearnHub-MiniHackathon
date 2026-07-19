import type { PricingPlan } from "../../types/course";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <article
      className={`rounded-[28px] border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        plan.highlighted
          ? "border-blue-500 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        {plan.highlighted && (
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
            Best value
          </span>
        )}
      </div>

      <p className={`mt-3 text-sm leading-7 ${plan.highlighted ? "text-blue-50" : "text-slate-600"}`}>
        {plan.description}
      </p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-semibold">{plan.price}</span>
        <span className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>
          {plan.billing}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <span className={`mt-1 h-2.5 w-2.5 rounded-full ${plan.highlighted ? "bg-white" : "bg-blue-600"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-full px-4 py-3 text-sm font-semibold transition ${
          plan.highlighted
            ? "bg-white text-blue-700 hover:bg-blue-50"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {plan.ctaLabel}
      </button>
    </article>
  );
};

export default PricingCard;
