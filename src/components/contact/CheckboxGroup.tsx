// Reusable checkbox group — toggles items in a controlled array.
export default function CheckboxGroup({ label, values, options, onChange, error }) {
  const toggle = (v) => {
    onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  };
  return (
    <div className="w-full">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const active = values.includes(o.value);
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
                type="checkbox"
                checked={active}
                onChange={() => toggle(o.value)}
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
 