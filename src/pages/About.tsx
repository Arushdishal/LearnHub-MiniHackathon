import React from "react";
import Team from "../components/about/Team";
import Values from "../components/about/Values";

import {
  Target,
  Eye,
  Users,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  About Page Component                                               */
/* ------------------------------------------------------------------ */

const About: React.FC = () => {
  return (
    
    <div>
      
      {/* ===== HERO SECTION ===== */}
      <section
        id="about-hero"
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #F0F4FF 0%, #E8EEFF 40%, #F8F9FF 100%)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "80px",
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            backgroundColor: "rgba(53, 99, 233, 0.08)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "100px",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "rgba(53, 99, 233, 0.06)",
          }}
        />

        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}
          className="animate-fade-in-up"
        >
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#3563E9",
              fontWeight: 500,
              marginBottom: "20px",
              backgroundColor: "rgba(53, 99, 233, 0.08)",
              padding: "6px 14px",
              borderRadius: "20px",
            }}
          >
            <Sparkles size={14} /> About LearnHub
          </p>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: "1.2",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Empowering Learners{" "}
            <span style={{ color: "#3563E9" }}>Worldwide</span>
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              lineHeight: "1.7",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We're on a mission to democratize quality education and make
            learning accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      

      {/* ===== MISSION & VISION SECTION ===== */}
      <section
        id="mission-vision"
        style={{ padding: "80px 0", backgroundColor: "#ffffff" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}
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
              Our Mission & Vision
            </h2>
            <p style={{ fontSize: "16px", color: "#6B7280" }}>
              What drives us every single day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
            }}
            className="mv-grid"
          >
            {/* Mission */}
            <div
              style={{
                backgroundColor: "#F9FAFB",
                borderRadius: "20px",
                padding: "40px 32px",
                border: "1px solid #F3F4F6",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #3563E9, #6366F1)",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: "#EBF0FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Target size={28} style={{ color: "#3563E9" }} />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: "1.75",
                }}
              >
                To democratize quality education by connecting learners with
                industry experts through accessible, affordable, and engaging
                online courses.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                backgroundColor: "#F9FAFB",
                borderRadius: "20px",
                padding: "40px 32px",
                border: "1px solid #F3F4F6",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #16A34A, #22D3EE)",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: "#ECFDF5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Eye size={28} style={{ color: "#16A34A" }} />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: "1.75",
                }}
              >
                To become the world's most trusted platform for skill
                development, empowering millions to achieve their career goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Values />
      <Team />
      {/* ===== CTA SECTION ===== */}
      <section
        id="about-cta"
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, #3563E9 0%, #6366F1 100%)",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "600px", margin: "0 auto", padding: "0 32px" }}
        >
          <Users
            size={40}
            style={{ color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}
          />
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Join Our Growing Community
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: "1.7",
              marginBottom: "32px",
            }}
          >
            Be a part of 50,000+ learners who are transforming their careers
            with LearnHub.
          </p>
          <a
            href="/courses"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#3563E9",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "28px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
            }}
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* ===== RESPONSIVE STYLES ===== */}
      <style>{`
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .mv-grid {
            grid-template-columns: 1fr !important;
          }
          #about-hero h1 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-dot {
            left: 20px !important;
          }
          .timeline-item {
            justify-content: flex-end !important;
            padding-left: 50px !important;
          }
          .timeline-card-left,
          .timeline-card-right {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 24px 20px !important;
          }
          #about-hero {
            padding: 50px 0 !important;
          }
          #about-hero h1 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
