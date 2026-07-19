import {
  Video,
  Award,
  Users,
  CalendarDays,
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/hero-woman.png";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: Video,
    title: "Live Classes",
    description:
      "Attend interactive live sessions conducted by experienced instructors.",
    color: "#3563E9",
    bgColor: "#EBF0FF",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Receive industry-recognized certificates after successful completion.",
    color: "#16A34A",
    bgColor: "#ECFDF5",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Get one-on-one guidance from experienced mentors throughout your learning.",
    color: "#9333EA",
    bgColor: "#F3E8FF",
  },
  {
    icon: CalendarDays,
    title: "Flexible Schedule",
    description:
      "Learn anytime with flexible class timings that fit your routine.",
    color: "#EA580C",
    bgColor: "#FFF7ED",
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Learn From Experts",
    description:
      "Our instructors have years of real industry experience and are passionate about teaching.",
    color: "#3563E9",
    bgColor: "#EBF0FF",
  },
  {
    icon: Target,
    title: "Career Focused Learning",
    description:
      "Practical projects and mentorship help you become job-ready and stand out.",
    color: "#16A34A",
    bgColor: "#ECFDF5",
  },
];

/* ------------------------------------------------------------------ */
/*  Floating Badge Component                                           */
/* ------------------------------------------------------------------ */

interface FloatingBadgeProps {
  icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  title: string;
  subtitle: string;
  color: string;
  style?: React.CSSProperties;
  className?: string;
}

const FloatingBadge = ({ icon: Icon, title, subtitle, color, style, className }: FloatingBadgeProps) => (
  <div
    className={className}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "10px 16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      position: "absolute",
      zIndex: 10,
      ...style,
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        backgroundColor: color + "15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={16} style={{ color }} />
    </div>
    <div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#1F2937",
          lineHeight: "1.2",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "11px",
          color: "#6B7280",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#22C55E",
            display: "inline-block",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
        {subtitle}
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Home Page Component                                                */
/* ------------------------------------------------------------------ */

const Home = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #F0F4FF 0%, #E8EEFF 40%, #F8F9FF 100%)",
          padding: "80px 0 60px",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            backgroundColor: "rgba(53, 99, 233, 0.08)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "200px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "rgba(53, 99, 233, 0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "120px",
            right: "100px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "rgba(53, 99, 233, 0.1)",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                color: "#3563E9",
                fontWeight: 500,
                marginBottom: "24px",
                backgroundColor: "rgba(53, 99, 233, 0.08)",
                padding: "6px 14px",
                borderRadius: "20px",
              }}
            >
              <Sparkles size={14} /> Learn | Grow | Succeed
            </p>

            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#111827",
                lineHeight: "1.15",
                marginBottom: "20px",
                letterSpacing: "-1px",
              }}
            >
              Upgrade Your Skills
              <br />
              With{" "}
              <span style={{ color: "#3563E9" }}>Industry Experts</span>
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                lineHeight: "1.7",
                marginBottom: "36px",
                maxWidth: "460px",
              }}
            >
              Learn modern technologies through interactive courses designed by
              professionals and accelerate your career.
            </p>

            <a
              href="/courses"
              id="explore-courses-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#3563E9",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "28px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px rgba(53, 99, 233, 0.4)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2850C8";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(53, 99, 233, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3563E9";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(53, 99, 233, 0.4)";
              }}
            >
              Explore Courses <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Image with Floating Badges */}
          <div
            className="animate-fade-in-right hero-image-container"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={heroImage}
              alt="Student learning with laptop"
              style={{
                width: "100%",
                maxWidth: "480px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />

            {/* Floating Badges */}
            <FloatingBadge
              icon={Video}
              title="Live Classes"
              subtitle="Live"
              color="#3563E9"
              className="animate-float"
              style={{ top: "-10px", left: "20px" }}
            />
            <FloatingBadge
              icon={Award}
              title="Certification"
              subtitle="Verified"
              color="#16A34A"
              className="animate-float-delayed"
              style={{ top: "40%", right: "-20px" }}
            />
            <FloatingBadge
              icon={Users}
              title="Mentorship"
              subtitle="Guided"
              color="#9333EA"
              className="animate-float-delayed-2"
              style={{ bottom: "20px", right: "10px" }}
            />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE LEARNHUB SECTION ===== */}
      <section
        id="why-choose"
        style={{
          padding: "80px 0",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Why Choose LearnHub?
            </h2>
            <p style={{ fontSize: "16px", color: "#6B7280" }}>
              Everything you need to build your career.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
            className="features-grid"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  id={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    border: "1px solid #F3F4F6",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = feature.color + "30";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#F3F4F6";
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: feature.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={24} style={{ color: feature.color }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "10px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: "1.65",
                    }}
                  >
                    {feature.description}
                  </p>
                  {/* Decorative bottom line */}
                  <div
                    style={{
                      width: "32px",
                      height: "3px",
                      backgroundColor: feature.color,
                      borderRadius: "2px",
                      marginTop: "20px",
                      opacity: 0.6,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section
        id="benefits"
        style={{
          padding: "0 0 80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Benefits of Learning With Us
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="benefits-grid"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  id={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    backgroundColor: "#F9FAFB",
                    borderRadius: "16px",
                    padding: "32px",
                    border: "1px solid #F3F4F6",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: benefit.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} style={{ color: benefit.color }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "8px",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6B7280",
                        lineHeight: "1.7",
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESPONSIVE STYLES ===== */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid h1 {
            font-size: 36px !important;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-image-container {
            order: -1;
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          #hero {
            padding: 40px 0 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;