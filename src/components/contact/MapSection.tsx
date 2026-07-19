// Embedded Google Map section — "Visit our campus".
export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-heading">
        <h2 className="map-title">Visit our campus</h2>
        <p className="map-subtitle">Drop by our New Delhi office — we'd love to say hi.</p>
      </div>
      <div className="map-frame-wrapper">
        <iframe
          title="LearnHub office map"
          src="https://www.google.com/maps?q=New+Delhi+India&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-iframe"
          allowFullScreen
        />
      </div>
    </section>
  );
}
