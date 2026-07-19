import { Search, SlidersHorizontal } from "lucide-react";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  level: string;
  onLevelChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  categories: string[];
}

const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  level,
  onLevelChange,
  sortBy,
  onSortChange,
  categories,
}: SearchAndFiltersProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <SlidersHorizontal className="h-4 w-4 text-blue-600" />
        Search & refine
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <label className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition focus-within:border-blue-500 focus-within:bg-white">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search courses"
            className="w-full bg-transparent outline-none"
            aria-label="Search courses"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-blue-500"
            aria-label="Filter by category"
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          <span>Level</span>
          <select
            value={level}
            onChange={(event) => onLevelChange(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-blue-500"
            aria-label="Filter by level"
          >
            <option value="All">All levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          <span>Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-blue-500"
            aria-label="Sort courses"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchAndFilters;
