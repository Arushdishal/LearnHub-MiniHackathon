import type { TextareaHTMLAttributes } from "react";

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  id?: string;
  name: string;
  className?: string;
};

export default function TextAreaField({ label, error, id, name, className = "", ...rest }: TextAreaFieldProps) {
  const tid = id || name;
  return (
    <div className="cf-field">
      <label htmlFor={tid} className="cf-label">{label}</label>
      <textarea id={tid} name={name} rows={4} {...rest}
        className={`cf-textarea${error ? " cf-input-error" : ""} ${className}`} />
      {error && <p className="cf-field-error">{error}</p>}
    </div>
  );
}