import { FiBookOpen } from "react-icons/fi";
import { Sparkles} from "lucide-react";

// Full-width gradient hero matching the uploaded image design.
export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-inner">
        <div className="contact-hero-badge">
          <Sparkles size={14} /><FiBookOpen size={13} />
          <span>LearnHub Admissions</span>
        </div>
        <h1 className="contact-hero-title">Get in Touch</h1>
        <p className="contact-hero-subtitle">
          Have questions about our courses? Fill out the form below
          <br className="contact-hero-br" />
          and our team will get back to you.
        </p>
      </div>
    </section>
  );
}
