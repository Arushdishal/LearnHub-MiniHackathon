import { ArrowRight, Clock3, Star, Users, BookOpen } from "lucide-react";
import type { Course } from "../../types/course";
import CourseThumbnail from "./CourseThumbnail";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <CourseThumbnail courseId={course.id} category={course.category} />

      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.35, color: "#111827", margin: 0 }}>
          {course.title}
        </h3>

        <p style={{ fontSize: "13px", lineHeight: 1.55, color: "#6B7280", marginTop: "8px" }}>
          {course.description}
        </p>

        {/* Instructor */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "#EFF6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: 700,
              color: "#3563E9",
            }}
          >
            {course.instructor.split(" ").map((n) => n[0]).join("")}
          </div>
          <span style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280" }}>
            {course.instructor}
          </span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            fontSize: "11px",
            fontWeight: 500,
            color: "#6B7280",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Star style={{ width: "12px", height: "12px", fill: "#F59E0B", color: "#F59E0B" }} />
            <span style={{ color: "#111827", fontWeight: 600 }}>{course.rating.toFixed(1)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Users style={{ width: "12px", height: "12px", color: "#9CA3AF" }} />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <BookOpen style={{ width: "12px", height: "12px", color: "#9CA3AF" }} />
            <span>{course.lessons}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Clock3 style={{ width: "12px", height: "12px", color: "#9CA3AF" }} />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Price & Enroll */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "16px",
            paddingTop: "14px",
            borderTop: "1px solid #F3F4F6",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <span style={{ fontSize: "22px", fontWeight: 800, color: "#111827" }}>
              ₹{course.price}
            </span>
            {course.originalPrice && (
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#9CA3AF", textDecoration: "line-through" }}>
                ${course.originalPrice}
              </span>
            )}
          </div>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#111827",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Enroll
            <ArrowRight style={{ width: "14px", height: "14px" }} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;