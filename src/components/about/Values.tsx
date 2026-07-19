const Values = () => {
  const values = [
    {
      icon: "📚",
      title: "Quality Learning",
      desc: "Industry-designed courses with practical knowledge.",
    },
    {
      icon: "💡",
      title: "Innovation",
      desc: "Learning with modern technologies and real projects.",
    },
    {
      icon: "🤝",
      title: "Community",
      desc: "Supportive mentors and collaborative environment.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      desc: "Helping students become job-ready professionals.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8fafc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#1e293b",
          marginBottom: "15px",
        }}
      >
        Why Choose LearnHub?
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "50px",
        }}
      >
        Everything you need to become industry ready.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {values.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              transition: ".3s",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                marginBottom: "10px",
                color: "#1e293b",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: "26px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;