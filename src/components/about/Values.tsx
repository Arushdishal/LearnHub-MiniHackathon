import "../../styles/Team.css";

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

const Values = () => {
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
          fontSize: "18px",
        }}
      >
        Everything you need to become industry ready.
      </p>

      <div className="team-container">
        {values.map((item) => (
          <div className="value-card" key={item.title}>
            <div className="value-icon">
              {item.icon}
            </div>

            <h3 className="team-name" style={{ fontSize: "26px" }}>
              {item.title}
            </h3>

            <p
              style={{
                color: "#64748b",
                marginTop: "15px",
                lineHeight: "30px",
                fontSize: "18px",
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