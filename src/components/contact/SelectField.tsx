// Reusable select with a leading placeholder option.
export default function SelectField({
  label,
  error,
  options,
  placeholder = "Select an option",
  id,
  name,
  className = "",
  ...rest
}) {
  const selectId = id || name;
  return (
    <div className="w-full">
      <label htmlFor={selectId} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id={selectId}
        name={name}
        {...rest}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all focus:ring-4 focus:ring-indigo-500/15 ${
          error ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-indigo-500"
        } ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
