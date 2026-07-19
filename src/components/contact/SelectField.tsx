import type { SelectHTMLAttributes } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  name: string;
  className?: string;
};

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
}: SelectFieldProps) {
  const selectId = id || name;
  return (
    <div className="cf-field">
      <label htmlFor={selectId} className="cf-label">{label}</label>
      <div className="cf-select-wrapper">
        <select
          id={selectId}
          name={name}
          {...rest}
          className={`cf-select${error ? " cf-input-error" : ""} ${className}`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span className="cf-select-arrow">▾</span>
      </div>
      {error && <p className="cf-field-error">{error}</p>}
    </div>
  );
}
