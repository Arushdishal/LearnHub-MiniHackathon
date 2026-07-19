export default function RadioGroup({ label, name, value, options, onChange, error }: {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div className="cf-field">
      <span className="cf-label">{label}</span>
      <div className="cf-radio-group">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label key={o.value}
              className={`cf-radio-label${active ? " cf-radio-active" : ""}${error ? " cf-radio-err" : ""}`}>
              <input type="radio" name={name} value={o.value} checked={active}
                onChange={() => onChange(o.value)} className="cf-radio-input" />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && <p className="cf-field-error">{error}</p>}
    </div>
  );
}