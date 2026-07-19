const Hero = () => {
  return (
    <section
      style={{
        padding: "100px 20px",
        background:
          "linear-gradient(135deg,#eef4ff,#dbeafe)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#1e293b",
        }}
      >
        About LearnHub
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          color: "#475569",
          fontSize: "18px",
        }}
      >
        LearnHub helps students learn modern technologies through
        interactive courses, industry mentors and practical projects.
      </p>
    </section>
  );
};

export default Hero;