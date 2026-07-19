import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const items = [
  { icon: FiMapPin, title: "Office Address", lines: ["123 Learning Street", "New Delhi, India"] },
  { icon: FiMail, title: "Email", lines: ["support@learnhub.com"] },
  { icon: FiPhone, title: "Phone", lines: ["+91 98765 43210"] },
  { icon: FiClock, title: "Working Hours", lines: ["Mon - Sat", "9:00 AM - 6:00 PM"] },
];

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaXTwitter, label: "X (Twitter)" },
];

// Glassmorphism info card with icons — slides in from the left.
export default function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-fit rounded-3xl border border-white/60 bg-white/85 p-6 shadow-xl backdrop-blur-xl sm:p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
      <p className="mt-1 text-sm text-slate-600">Reach us anytime — we're here to help you learn.</p>

      <ul className="mt-8 space-y-6">
        {items.map(({ icon: Icon, title, lines }) => (
          <li key={title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
              {lines.map((l) => (
                <p key={l} className="text-sm leading-relaxed text-slate-600">{l}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Follow us</p>
        <div className="flex gap-2">
          {socials.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </motion.aside>
  ) ;
}
