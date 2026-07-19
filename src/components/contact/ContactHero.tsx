import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

// Full-width gradient hero with abstract shapes.
export default function ContactHero() {
  return (
    <section className="relative z-0 w-full overflow-visible bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl px-6 pt-24 pb-40 text-center sm:pt-32 sm:pb-48"
      >
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
          <FiBookOpen /> LearnHub Admissions
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Get in Touch</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          Have questions about our courses? Fill out the form below and our team will get back to you.
        </p>
      </motion.div>
    </section>
  );
} 
