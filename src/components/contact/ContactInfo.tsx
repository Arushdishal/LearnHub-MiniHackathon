import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const items = [
  { icon: FiMapPin,  title: "Office Address",  lines: ["123 Learning Street", "New Delhi, India"] },
  { icon: FiMail,   title: "Email",            lines: ["support@learnhub.com"], isEmail: true },
  { icon: FiPhone,  title: "Phone",            lines: ["+91 98765 43210"] },
  { icon: FiClock,  title: "Working Hours",    lines: ["Mon - Sat", "9:00 AM - 6:00 PM"] },
];

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaInstagram,  label: "Instagram" },
  { icon: FaFacebookF,  label: "Facebook" },
  { icon: FaXTwitter,   label: "X (Twitter)" },
];

export default function ContactInfo() {
  return (
    <aside className="contact-info-card">
      <h2 className="contact-info-title">Contact Information</h2>
      <p className="contact-info-subtitle">Reach us anytime — we're here to help you learn.</p>

      <ul className="contact-info-list">
        {items.map(({ icon: Icon, title, lines, isEmail }) => (
          <li key={title} className="contact-info-item">
            <div className="contact-info-icon">
              <Icon size={18} />
            </div>
            <div className="contact-info-text">
              <h3 className="contact-info-item-title">{title}</h3>
              {lines.map((l) =>
                isEmail ? (
                  <a key={l} href={`mailto:${l}`} className="contact-info-email">{l}</a>
                ) : (
                  <p key={l} className="contact-info-line">{l}</p>
                )
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="contact-info-social-wrapper">
        <p className="contact-info-social-label">Follow Us</p>
        <div className="contact-info-socials">
          {socials.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label} className="contact-social-btn">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}