import ContactHero from "../components/contact/ContactHero.tsx";
import ContactInfo from "../components/contact/ContactInfo.tsx";
import ContactForm from "../components/contact/ContactForm.tsx";
import MapSection from "../components/contact/MapSection.tsx";
// Contact / Enrollment page for LearnHub.
// Desktop: info card (left) + form (right). Mobile: stacked.
export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 text-slate-900 antialiased">
      <ContactHero />

      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4 pb-20 sm:px-6 lg:-mt-24 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}
