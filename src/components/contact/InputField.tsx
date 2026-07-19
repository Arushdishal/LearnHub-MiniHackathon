import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  id?: string;
  name: string;
  className?: string;
};

export default function InputField({ label, error, id, name, className = "", ...rest }: InputFieldProps) {
  const inputId = id || name;
  return (
    <div className="cf-field">
      <label htmlFor={inputId} className="cf-label">{label}</label>
      <input
        id={inputId}
        name={name}
        {...rest}
        className={`cf-input${error ? " cf-input-error" : ""} ${className}`}
      />
      {error && <p className="cf-field-error">{error}</p>}
    </div>
  );
}