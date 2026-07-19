import { ArrowRight, Clock3, Star } from "lucide-react";
import type { Course } from "../../types/course";
import CourseThumbnail from "./CourseThumbnail";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
      <div className="p-3">
        <CourseThumbnail title={course.title} category={course.category} accent={course.accent} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-600">{course.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{course.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-slate-400" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Price</p>
            <p className="mt-1 text-base font-semibold text-slate-900">${course.price}</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition duration-300 group-hover:bg-blue-600">
            Enroll
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;