import { motion } from "framer-motion";

// Embedded Google Map (New Delhi).
export default function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Visit our campus</h2>
        <p className="mt-2 text-sm text-slate-600">
          Drop by our New Delhi office — we'd love to say hi.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl"
      >
        <iframe
          title="LearnHub office map"
          src="https://www.google.com/maps?q=New+Delhi+India&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[420px] w-full border-0"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
}
