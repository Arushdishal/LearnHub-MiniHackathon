export default function CheckboxGroup({ label, values, options, onChange, error }: {
  label: string;
  values: string[];
  options: { value: string; label: string }[];
  onChange: (v: string[]) => void;
  error?: string;
}) {
  const toggle = (v: string) => {
    onChange(values.includes(v) ? values.filter((x) => x !== v) : [...values, v]);
  };
  return (
    <div className="cf-field">
      <span className="cf-label">{label}</span>
      <div className="cf-checkbox-grid">
        {options.map((o) => {
          const active = values.includes(o.value);
          return (
            <label key={o.value}
              className={`cf-checkbox-label${active ? " cf-checkbox-active" : ""}${error ? " cf-checkbox-err" : ""}`}>
              <input type="checkbox" checked={active} onChange={() => toggle(o.value)} className="cf-checkbox-input" />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && <p className="cf-field-error">{error}</p>}
    </div>
  );
}