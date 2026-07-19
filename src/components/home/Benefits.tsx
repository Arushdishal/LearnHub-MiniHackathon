const Benefits = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Benefits of Learning With Us
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-2xl font-semibold">
              Learn From Experts
            </h3>

            <p className="mt-4 text-gray-600">
              Our instructors have years of real industry experience.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-2xl font-semibold">
              Career Focused Learning
            </h3>

            <p className="mt-4 text-gray-600">
              Practical projects and mentorship help you become job-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;