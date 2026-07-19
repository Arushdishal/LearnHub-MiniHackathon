// Reusable radio group rendered as pill-style options.
export default function RadioGroup({ label, name, value, options, onChange, error }) {
  return (
    <div className="w-full">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="flex flex-wrap gap-3">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm shadow-sm transition-all ${
                active
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300"
              } ${error ? "border-red-400" : ""}`}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={active}
                onChange={() => onChange(o.value)}
                className="h-4 w-4 accent-indigo-600"
              />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
