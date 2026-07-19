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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">LearnHub Courses</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Learn with clarity, not clutter.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A focused collection of high-quality programs designed for thoughtful growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                Explore courses
              </a>
              <a href="#pricing" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                View plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">Featured courses</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Carefully curated learning paths.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">Simple plans</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Flexible access without unnecessary complexity.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">Student voices</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A few experiences from learners who stayed consistent.
          </h2>
        </div>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Courses;