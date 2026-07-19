import { useMemo } from "react";
import { courses } from "../data/courses";
import { pricingPlans } from "../data/pricing";
import CourseCard from "../components/courses/CourseCard";
import FAQSection from "../components/courses/FAQSection";
import PricingCard from "../components/courses/PricingCard";
import TestimonialCarousel from "../components/courses/TestimonialCarousel";

const Courses = () => {
  const featuredCourses = useMemo(() => {
    return [...courses].sort((left, right) => Number(right.featured) - Number(left.featured)).slice(0, 6);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #F0F4FF 0%, #E8EEFF 40%, #F8F9FF 100%)",
          padding: "80px 0 60px",
        }}
      >
        <div
          className="absolute left-[60px] top-[40px] h-[60px] w-[60px] rotate-45 rounded-[12px]"
          style={{ backgroundColor: "rgba(53, 99, 233, 0.08)" }}
        />
        <div
          className="absolute bottom-[80px] left-[200px] h-[30px] w-[30px] rounded-full"
          style={{ backgroundColor: "rgba(53, 99, 233, 0.06)" }}
        />
        <div
          className="absolute right-[100px] top-[120px] h-[20px] w-[20px] rounded-full"
          style={{ backgroundColor: "rgba(53, 99, 233, 0.1)" }}
        />

        <div className="mx-auto max-w-[1200px] px-[32px]">
          <div className="max-w-[620px]">
            <p className="mb-6 inline-flex items-center gap-[6px] rounded-full bg-white/70 px-[14px] py-[6px] text-[14px] font-medium text-[#3563E9]">
              Learn | Grow | Succeed
            </p>
            <h1 className="text-[48px] font-[800] leading-[1.15] tracking-[-1px] text-[#111827] sm:text-[56px]">
              Explore Courses Designed for Real Growth.
            </h1>
            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#6B7280]">
              A focused collection of high-signal programs built to help you learn with confidence and momentum.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="inline-flex items-center gap-[8px] rounded-full border border-transparent bg-[#3563E9] px-[28px] py-[14px] text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(53,99,233,0.4)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#2850C8] hover:shadow-[0_6px_20px_rgba(53,99,233,0.5)]"
              >
                Explore Courses
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-[#E5E7EB] bg-white px-[28px] py-[14px] text-[15px] font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#D1D5DB]"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[32px]">
          <div className="max-w-[620px]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#3563E9]">Featured Courses</p>
            <h2 className="mt-3 text-[32px] font-[700] leading-[1.2] text-[#111827]">
              Carefully curated learning paths.
            </h2>
          </div>

          <div className="mt-12 grid gap-[24px] md:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[32px]">
          <div className="max-w-[620px]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#3563E9]">Simple Plans</p>
            <h2 className="mt-3 text-[32px] font-[700] leading-[1.2] text-[#111827]">
              Flexible access without unnecessary complexity.
            </h2>
          </div>

          <div className="mt-12 grid gap-[24px] lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[32px]">
          <div className="max-w-[620px]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#3563E9]">Student Voices</p>
            <h2 className="mt-3 text-[32px] font-[700] leading-[1.2] text-[#111827]">
              A few experiences from learners who stayed consistent.
            </h2>
          </div>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Courses;