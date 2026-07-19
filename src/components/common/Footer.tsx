import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer id="footer" style={{ backgroundColor: "#1E293B", color: "#ffffff" }}>
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 32px 32px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "32px",
        }}
        className="footer-grid"
      >
        {/* Brand Section */}
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "8px",
            }}
          >
            LearnHub
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "14px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Learn skills from industry experts.
          </p>
          {/* Social Links */}
          <div style={{ display: "flex", gap: "12px" }}>
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #475569",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94A3B8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3563E9";
                  e.currentTarget.style.borderColor = "#3563E9";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#475569";
                  e.currentTarget.style.color = "#94A3B8";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(53, 99, 233, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Mail size={20} style={{ color: "#3563E9" }} />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>Email</p>
            <p style={{ color: "#94A3B8", fontSize: "14px" }}>support@learnhub.com</p>
          </div>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(53, 99, 233, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Phone size={20} style={{ color: "#3563E9" }} />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>Phone</p>
            <p style={{ color: "#94A3B8", fontSize: "14px" }}>+1 234 567 8900</p>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(53, 99, 233, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={20} style={{ color: "#3563E9" }} />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>Location</p>
            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.5" }}>
              123 Learning St, Education City,
              <br />
              Knowledge Land
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid #334155",
          padding: "20px 32px",
          textAlign: "center",
          fontSize: "14px",
          color: "#94A3B8",
        }}
      >
        © 2026 LearnHub. All Rights Reserved.
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.2fr 1fr 1fr 1.2fr !important;
            align-items: start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;