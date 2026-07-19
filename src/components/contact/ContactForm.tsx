import { useState, type FormEvent } from "react";
import { FiSend, FiRotateCcw } from "react-icons/fi";
import InputField from "./InputField.js";
import SelectField from "./SelectField.js";
import RadioGroup from "./RadioGroup.js";
import CheckboxGroup from "./CheckboxGroup.js";
import TextAreaField from "./TextAreaField.js";
import SuccessMessage from "./SuccessMessage.js";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqgbwj";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  startDate: "",
  category: "",
  mode: "",
  interests: [] as string[],
  message: "",
};

type ContactFormValues = typeof initial;
type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const categoryOptions = [
  { value: "web-development", label: "Web Development" },
  { value: "data-science", label: "Data Science" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
];

const modeOptions = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "hybrid", label: "Hybrid" },
];

const interestOptions = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "uiux", label: "UI/UX Design" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "digital-marketing", label: "Digital Marketing" },
];

function validate(v: ContactFormValues): ContactFormErrors {
  const e: ContactFormErrors = {};
  if (!v.fullName.trim()) e.fullName = "Full name is required";
  if (!v.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
  if (!v.phone.trim()) e.phone = "Phone number is required";
  else if (!/^\d{10}$/.test(v.phone.trim())) e.phone = "Phone must be exactly 10 digits";
  if (!v.startDate) e.startDate = "Preferred start date is required";
  if (!v.category) e.category = "Please select a course category";
  if (!v.mode) e.mode = "Please select a learning mode";
  if (v.interests.length === 0) e.interests = "Select at least one interest";
  if (!v.message.trim()) e.message = "Message is required";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = <K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleReset = () => {
    setValues(initial);
    setErrors({});
    setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) { setErrors(found); return; }
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) { setSuccess(true); }
      else { setSubmitError("Submission failed. Update FORMSPREE_ENDPOINT with your Formspree ID."); }
    } catch {
      setSubmitError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessMessage onReset={() => { handleReset(); setSuccess(false); }} />;
  }

  return (
    <div className="contact-form-card">
      <h2 className="contact-form-title">Enrollment Form</h2>
      <p className="contact-form-subtitle">Tell us a bit about you — it takes less than a minute.</p>

      <form onSubmit={handleSubmit} noValidate className="contact-form-grid">
        <InputField label="Full Name" name="fullName" type="text" placeholder="Your Name"
          value={values.fullName} onChange={(e) => update("fullName", e.target.value)} error={errors.fullName} />
        <InputField label="Email" name="email" type="email" placeholder="email@example.com"
          value={values.email} onChange={(e) => update("email", e.target.value)} error={errors.email} />
        <InputField label="Phone Number" name="phone" type="tel" inputMode="numeric" maxLength={10}
          placeholder="Contact Number" value={values.phone}
          onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))} error={errors.phone} />
        <InputField label="Preferred Start Date" name="startDate" type="date"
          value={values.startDate} onChange={(e) => update("startDate", e.target.value)} error={errors.startDate} />

        <div className="cf-span-half">
          <SelectField label="Course Category" name="category" value={values.category}
            onChange={(e) => update("category", e.target.value)}
            options={categoryOptions} error={errors.category} />
        </div>

        <div className="cf-span-full">
          <RadioGroup label="Learning Mode" name="mode" value={values.mode}
            options={modeOptions} onChange={(v: string) => update("mode", v)} error={errors.mode} />
        </div>

        <div className="cf-span-full">
          <CheckboxGroup label="Interests" values={values.interests}
            options={interestOptions} onChange={(v: string[]) => update("interests", v)} error={errors.interests} />
        </div>

        <div className="cf-span-full">
          <TextAreaField label="Message / Query" name="message"
            placeholder="Tell us what you'd like to learn..."
            value={values.message} onChange={(e) => update("message", e.target.value)} error={errors.message} />
        </div>

        {submitError && (
          <div role="alert" className="cf-error-banner cf-span-full">{submitError}</div>
        )}

        <div className="cf-btn-row cf-span-full">
          <button type="submit" disabled={loading} className="cf-btn-submit" id="contact-submit-btn">
            {loading ? (<><span className="cf-spinner" />Submitting...</>) : (<><FiSend size={16} /> Submit</>)}
          </button>
          <button type="button" onClick={handleReset} className="cf-btn-reset" id="contact-reset-btn">
            <FiRotateCcw size={16} /> Reset
          </button>
        </div>
      </form>
    </div>
  );
}
