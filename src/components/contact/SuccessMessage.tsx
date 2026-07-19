import { motion } from "framer-motion";
import { FiCheckCircle, FiRefreshCw } from "react-icons/fi";

type SuccessMessageProps = {
  onReset: () => void;
};

// Animated success confirmation shown after Formspree submission.
export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-30 flex flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 text-center shadow-2xl"
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30"
      >
        <FiCheckCircle size={40} />
      </motion.div>
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Enrollment Submitted Successfully!
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        Thank you for contacting LearnHub.
        <br />
        Our admissions team will contact you shortly.
      </p>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40"
      >
        <FiRefreshCw size={16} /> Submit Another Response
      </motion.button>
    </motion.div>
  );
}
