import { useMemo } from "react";
import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";
import { courses } from "../data/courses";
import { pricingPlans } from "../data/pricing";
import CourseCard from "../components/courses/CourseCard";
import FAQSection from "../components/courses/FAQSection";
import PricingCard from "../components/courses/PricingCard";
import TestimonialCarousel from "../components/courses/TestimonialCarousel";

const Courses = () => {
  const featuredCourses = useMemo(() => {
    return [...courses]
      .sort((left, right) => Number(right.featured) - Number(left.featured))
      .slice(0, 4);
  }, []);

  return (
    <div style={{ background: "#ffffff", color: "#111827", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ══════════ HERO ══════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #F0F4FF 0%, #E8EEFF 40%, #F8F9FF 100%)",
          padding: "80px 0 60px",
        }}
      >
        {/* Decorative large circle left */}
        <div
          style={{
            position: "absolute",
            left: "-80px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            border: "30px solid rgba(53, 99, 233, 0.06)",
          }}
        />
        {/* Decorative small dot right */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            top: "40px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: "rgba(53, 99, 233, 0.12)",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div style={{ flex: 1, maxWidth: "520px" }}>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#3563E9",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={14} /> Learn | Grow | Succeed
            </p>

            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                color: "#111827",
                margin: "0 0 20px 0",
              }}
            >
              Explore Courses{" "}
              <br className="hidden-mobile" />
              Designed for{" "}
              <span style={{ color: "#3563E9" }}>Real<br className="hidden-mobile" /> Growth.</span>
            </h1>

            <p
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: "420px",
                margin: "0 0 32px 0",
              }}
            >
              A focused collection of high-signal programs built to help you
              learn with confidence and momentum.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#courses"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#3563E9",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: "24px",
                  border: "none",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                Explore Courses <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#fff",
                  color: "#111827",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                View Plans
              </a>
            </div>
          </div>

          {/* Right visual — abstract card with overlapping bars */}
          <div className="hero-visual" style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "4 / 3",
                backgroundColor: "#fff",
                borderRadius: "24px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
                padding: "28px",
              }}
            >
              {/* Gray bar */}
              <div style={{ width: "65%", height: "50px", borderRadius: "12px", backgroundColor: "#E2E8F0", marginBottom: "14px" }} />
              {/* Green bar */}
              <div style={{ width: "80%", height: "42px", borderRadius: "12px", backgroundColor: "#BBF7D0", marginLeft: "15%", marginBottom: "14px" }} />
              {/* Purple area */}
              <div style={{ width: "90%", height: "80px", borderRadius: "16px", backgroundColor: "#E9D5FF", marginLeft: "5%", position: "relative" }}>
                {/* Rocket badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-16px",
                    right: "20px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED COURSES ══════════ */}
      <section id="courses" style={{ padding: "100px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ maxWidth: "700px" }}>
            <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#3563E9", marginBottom: "12px" }}>
              Featured Courses
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.2, color: "#111827", margin: 0 }}>
              Carefully curated learning paths.
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", marginTop: "12px", lineHeight: 1.6 }}>
              Hand-picked courses designed by industry experts to give you real-world skills that matter.
            </p>
          </div>

          <div
            className="courses-grid"
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRICING ══════════ */}
      <section id="pricing" style={{ padding: "80px 0 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#3563E9", marginBottom: "12px" }}>
              Simple Plans
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.2, color: "#111827", margin: 0 }}>
              Flexible access, <span style={{ color: "#3563E9" }}>zero complexity.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", marginTop: "12px", lineHeight: 1.6 }}>
              Choose the plan that fits your learning style. Upgrade or downgrade anytime.
            </p>
          </div>

          <div
            className="pricing-grid"
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              maxWidth: "960px",
              margin: "48px auto 0",
              alignItems: "start",
            }}
          >
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS + FAQ SIDE BY SIDE ══════════ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div
          className="testimonial-faq-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Testimonials */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#3563E9", marginBottom: "12px" }}>
              Student Voices
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1.2, color: "#111827", margin: "0 0 32px 0" }}>
              Experiences from learners who stayed consistent.
            </h2>
            <TestimonialCarousel />
          </div>

          {/* FAQ */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#3563E9", marginBottom: "12px" }}>
              FAQ
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1.2, color: "#111827", margin: "0 0 8px 0" }}>
              Common questions before you begin.
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "24px", lineHeight: 1.6 }}>
              Everything you need to know about our courses and learning platform.
            </p>
            <FAQSection />
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section style={{ padding: "0 32px 80px" }}>
        <div
          className="cta-banner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "#3563E9",
            borderRadius: "20px",
            padding: "48px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <GraduationCap style={{ color: "#3563E9", width: "32px", height: "32px" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
                Ready to start your learning journey?
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", marginTop: "6px" }}>
                Join thousands of learners building real-world skills with courses that actually move the needle.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff",
              color: "#3563E9",
              fontSize: "15px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.3s",
            }}
          >
            Get Started Today <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ══════════ RESPONSIVE STYLES ══════════ */}
      <style>{`
        .hidden-mobile { display: inline; }
        @media (max-width: 1024px) {
          .hero-grid {
            flex-direction: column !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            max-width: 100% !important;
          }
          .hero-grid > div:first-child p:last-of-type {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-visual {
            display: none !important;
          }
          .courses-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .testimonial-faq-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .cta-banner {
            flex-direction: column !important;
            text-align: center;
            padding: 36px 24px !important;
          }
          .cta-banner > div:first-child {
            flex-direction: column !important;
          }
          .hidden-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .courses-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          section:first-child {
            padding: 60px 0 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Courses;