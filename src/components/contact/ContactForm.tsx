import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiRotateCcw } from "react-icons/fi";
import InputField from "./InputField.js";
import SelectField from "./SelectField.js";
import RadioGroup from "./RadioGroup.js";
import CheckboxGroup from "./CheckboxGroup.js";
import TextAreaField from "./TextAreaField.js";
import SuccessMessage from "./SuccessMessage.js";

// TODO: replace with your own Formspree endpoint: https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqgbwj";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  startDate: "",
  category: "",
  mode: "",
  interests: [],
  message: "",
};

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

// JS-driven validation — does not rely on HTML validation.
function validate(v) {
  const e = {};
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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const update = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleReset = () => {
    setValues(initial);
    setErrors({});
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setSubmitError(
          "Submission failed. Update FORMSPREE_ENDPOINT in ContactForm.jsx with your Formspree ID."
        );
      }
    } catch {
      setSubmitError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SuccessMessage
        onReset={() => {
          handleReset();
          setSuccess(false);
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl sm:p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900">Enrollment Form</h2>
      <p className="mt-1 text-sm text-slate-600">
        Tell us a bit about you — it takes less than a minute.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Jane Doe"
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          error={errors.fullName}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          placeholder="10-digit number"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
          error={errors.phone}
        />
        <InputField
          label="Preferred Start Date"
          name="startDate"
          type="date"
          value={values.startDate}
          onChange={(e) => update("startDate", e.target.value)}
          error={errors.startDate}
        />

        <SelectField
          label="Course Category"
          name="category"
          value={values.category}
          onChange={(e) => update("category", e.target.value)}
          options={categoryOptions}
          error={errors.category}
        />

        <div className="sm:col-span-2">
          <RadioGroup
            label="Learning Mode"
            name="mode"
            value={values.mode}
            options={modeOptions}
            onChange={(v) => update("mode", v)}
            error={errors.mode}
          />
        </div>

        <div className="sm:col-span-2">
          <CheckboxGroup
            label="Interests"
            values={values.interests}
            options={interestOptions}
            onChange={(v) => update("interests", v)}
            error={errors.interests}
          />
        </div>

        <div className="sm:col-span-2">
          <TextAreaField
            label="Message / Query"
            name="message"
            placeholder="Tell us what you'd like to learn..."
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            error={errors.message}
          />
        </div>

        {submitError && (
          <div
            role="alert"
            className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 sm:col-span-2"
          >
            {submitError}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Submitting...
              </>
            ) : (
              <>
                <FiSend size={16} /> Submit
              </>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            <FiRotateCcw size={16} /> Reset
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
