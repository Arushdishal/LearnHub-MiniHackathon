import { FiCheckCircle, FiRefreshCw } from "react-icons/fi";

type SuccessMessageProps = {
  onReset: () => void;
};

// Success confirmation shown after Formspree submission.
export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="contact-form-card contact-success">
      <div className="success-icon-wrap">
        <FiCheckCircle size={40} />
      </div>
      <h2 className="success-title">Enrollment Submitted!</h2>
      <p className="success-body">
        Thank you for contacting LearnHub.<br />
        Our admissions team will reach out to you shortly.
      </p>
      <button onClick={onReset} className="cf-btn-submit success-btn" id="contact-new-submission-btn">
        <FiRefreshCw size={16} /> Submit Another Response
      </button>
    </div>
  );
}
