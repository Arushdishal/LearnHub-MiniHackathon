import { ArrowRight, Clock3, Star } from "lucide-react";
import type { Course } from "../../types/course";
import CourseThumbnail from "./CourseThumbnail";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white p-[24px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
      <div className="mb-[20px]">
        <CourseThumbnail title={course.title} category={course.category} accent={course.accent} />
      </div>

      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#3563E9]">{course.category}</p>
      <h3 className="mt-2 text-[17px] font-[700] leading-[1.5] text-[#111827]">{course.title}</h3>
      <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-[#6B7280]">{course.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-[#F3F4F6] pt-[16px] text-[14px] text-[#6B7280]">
        <div className="flex items-center gap-[6px]">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span>{course.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <Clock3 className="h-4 w-4 text-[#9CA3AF]" />
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[12px] uppercase tracking-[0.24em] text-[#9CA3AF]">Price</p>
          <p className="mt-1 text-[16px] font-[700] text-[#111827]">${course.price}</p>
        </div>
        <button className="inline-flex items-center gap-[8px] rounded-full bg-[#3563E9] px-[16px] py-[10px] text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#2850C8]">
          Enroll
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
};

export default CourseCard;