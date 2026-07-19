interface CourseThumbnailProps {
  title: string;
  category: string;
  accent: string;
}

const CourseThumbnail = ({ title, category, accent }: CourseThumbnailProps) => {
  return (
    <div className={`relative overflow-hidden rounded-[12px] border border-white/40 p-[20px] ${accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_45%)]" />
      <div className="relative flex h-[140px] flex-col justify-between">
        <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/90">{category}</div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">Course preview</p>
          <h3 className="mt-2 text-[18px] font-[700] leading-[1.35] text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CourseThumbnail;
