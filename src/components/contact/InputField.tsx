import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  id?: string;
  name: string;
  className?: string;
};

// Reusable text/email/tel/date input with label + inline error.
export default function InputField({
  label,
  error,
  id, 
  name,
  className = "",
  ...rest
}: InputFieldProps) {
  const inputId = id ||  name;
  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        {...rest}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition-all focus:ring-4 focus:ring-indigo-500/15 ${
          error ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-indigo-500"
        } ${className}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
