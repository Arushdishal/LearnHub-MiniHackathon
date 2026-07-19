import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900">
          Upgrade Your Skills With Industry Experts
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Learn modern technologies through interactive courses designed by
          professionals and accelerate your career.
        </p>

        <Link
          to="/courses"
          className="mt-10 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default Hero;