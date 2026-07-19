const Mission = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
          color: "#1e293b",
        }}
      >
        Mission & Vision
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "450px",
            background: "#2563eb",
            color: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          }}
        >
          <h2>🎯 Our Mission</h2>

          <p style={{ marginTop: "20px", lineHeight: "30px" }}>
            To make quality education affordable, accessible and practical
            for every student through industry-ready learning.
          </p>
        </div>

        <div
          style={{
            width: "450px",
            background: "#14b8a6",
            color: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          }}
        >
          <h2>🚀 Our Vision</h2>

          <p style={{ marginTop: "20px", lineHeight: "30px" }}>
            To become India's most trusted online learning platform that
            empowers every learner with real-world skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;