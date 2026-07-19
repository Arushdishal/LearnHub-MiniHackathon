const members = [
  {
    name: "Ayush",
    role: "Team Leader",
    emoji: "👨‍💻",
  },
  {
    name: "Arush",
    role: "Frontend Developer",
    emoji: "💻",
  },
  {
    name: "Aditya",
    role: "Frontend Developer",
    emoji: "⚛️",
  },
  {
    name: "Medhavi",
    role: "UI/UX Designer",
    emoji: "🎨",
  },
  {
    name: "Shubham",
    role: "Backend Developer",
    emoji: "🛠️",
  },
];

const Team = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#ffffff",
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
        Meet Our Team
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "50px",
        }}
      >
        The passionate people behind LearnHub.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {members.map((member) => (
          <div
            key={member.name}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
              }}
            >
              {member.emoji}
            </div>

            <h3
              style={{
                marginBottom: "8px",
                color: "#1e293b",
              }}
            >
              {member.name}
            </h3>

            <p
              style={{
                color: "#2563eb",
                fontWeight: "600",
              }}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;