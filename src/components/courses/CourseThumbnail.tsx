import aiProductImg from "../../assets/course_ai_product.png";
import reactTsImg from "../../assets/course_react_typescript.png";
import dataStorytellingImg from "../../assets/course_data_storytelling.png";
import growthMarketingImg from "../../assets/course_growth_marketing.png";

interface CourseThumbnailProps {
  courseId: string;
  category: string;
}

const courseImages: Record<string, string> = {
  "ai-product-design": aiProductImg,
  "react-typescript": reactTsImg,
  "data-storytelling": dataStorytellingImg,
  "growth-marketing": growthMarketingImg,
};

const CourseThumbnail = ({ courseId, category }: CourseThumbnailProps) => {
  const imageSrc = courseImages[courseId];

  return (
    <div
      style={{
        height: "150px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F3F4F6",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={category}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#3563E9",
          }}
        />
      )}
      
      {/* Category Pill overlay on top-left of the image */}
      <span
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          fontSize: "10px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "4px 8px",
          borderRadius: "4px",
          backdropFilter: "blur(2px)",
        }}
      >
        {category}
      </span>
    </div>
  );
};

export default CourseThumbnail;
