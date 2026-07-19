// Reusable textarea with matching styling.
export default function TextAreaField({ label, error, id, name, className = "", ...rest }) {
  const tid = id || name;
  return (
    <div className="w-full">
      <label htmlFor={tid} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={tid}
        name={name}
        rows={5}
        {...rest}
        className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition-all focus:ring-4 focus:ring-indigo-500/15 ${
          error ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-indigo-500"
        } ${className}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
