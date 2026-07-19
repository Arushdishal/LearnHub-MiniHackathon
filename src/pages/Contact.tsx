import "../styles/contact.css";
import ContactForm from "../components/contact/ContactForm.tsx";
import ContactHero from "../components/contact/ContactHero.tsx";
import ContactInfo from "../components/contact/ContactInfo.tsx";
import MapSection from "../components/contact/MapSection.tsx";

// Contact / Enrollment page for LearnHub.
// Desktop: info card (left) + form (right). Mobile: stacked.
export default function Contact() {
  return (
    <main className="contact-page">
      <ContactHero />

      <section className="contact-content-section">
        <div className="contact-grid">
          <div className="contact-info-col">
            <ContactInfo />
          </div>
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}
