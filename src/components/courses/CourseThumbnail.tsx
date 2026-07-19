interface CourseThumbnailProps {
  title: string;
  category: string;
  accent: string;
}

const CourseThumbnail = ({ title, category, accent }: CourseThumbnailProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 p-5 ${accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_45%)]" />
      <div className="relative flex h-36 flex-col justify-between">
        <div className="flex items-center justify-between text-sm font-semibold text-white/90">
          <span>{category}</span>
          <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.25em]">
            Live
          </span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">Course preview</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CourseThumbnail;
