import "../../styles/Team.css";

import Ayush from "../../assets/team/Ayush.jpeg";
import Arush from "../../assets/team/Arush.jpeg";
import Aditya from "../../assets/team/Aditya.jpeg";
import Shubham from "../../assets/team/Shubham.jpeg";

const members = [
  {
    name: "Ayush",
    image: Ayush,
  },
  {
    name: "Arush",
    image: Arush,
  },
  {
    name: "Aditya",
    image: Aditya,
  },
  {
    name: "Shubham",
    image: Shubham,
  },
  {
    name: "Medhavi",
    image: null,
  },
];

const Team = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#fff",
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
          fontSize: "18px",
        }}
      >
        The passionate people behind LearnHub.
      </p>

      <div className="team-container">
        {members.map((member) => (
          <div className="team-card" key={member.name}>
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
            ) : (
              <div className="team-avatar">
                👩‍💻
              </div>
            )}

            <h3 className="team-name">
              {member.name}
            </h3>

            <p className="team-role">
              Frontend Developer
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;