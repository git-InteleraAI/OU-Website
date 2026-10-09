import "./Team.css";

const teamMembers = [
  {
    name: "Dr. Pradeep Kumar Boya",
    role: "Project Scientist-II, ISRO-RESPOND",
    category: "PROJECT SCIENTIST",
    description: "",
    expertise: "",
    image: "/images/team/pradeep-kumar-boya.png",
  },
  {
    name: "Mr. MD Toufeeq Ahmed",
    role: "Ph.D. Research Scholar",
    category: "PH.D.",
    description: "Low phase noise fractional-N ADPLL.",
    expertise: "Analog · Cadence, Siemens Calibre",
    image: "/images/team/toufeeq.jpeg",
  },
  {
    name: "Ms. M. Shivani",
    role: "Ph.D. Research Scholar",
    category: "PH.D.",
    description:
      "Edge-AI enabled autonomous drone surveillance for border security and defence.",
    expertise: "Hardware accelerators for ML · Kria KV260",
    image: "/images/team/shivani.jpeg",
  },
  {
    name: "Ms. A. P. Vasanthi",
    role: "Ph.D. Research Scholar",
    category: "PH.D. · VISVESVARAYA SCHEME",
    description:
      "Low Power ASIC Interface Design for Multi Parameter Metamaterial based Sensor, in collaboration with WnP.",
    expertise: "Analog, RF · HFSS, Cadence Virtuoso",
    image: "/images/team/ap-vasanthi.jpg",
  },
  {
    name: "Mr. Shaik Haneef",
    role: "Project Associate",
    category: "PROJECT ASSOCIATE",
    description:
      "ASIC beamforming PSK receiver, digital PLLs, an 8-bit counter taken to GDSII, and an op-amp with bandgap reference.",
    expertise:
      "ZCU102/ZCU104, Cadence, Vivado, MATLAB, RF test equipment",
    image: "/images/team/shaik-haneef.jpg",
  },
];

const Team = () => {
  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="team-hero-inner">
          <span className="team-badge">CAIIC</span>
          <h1>Our Team</h1>
          <p>
            Meet the researchers and project staff contributing to advanced
            semiconductor systems, artificial intelligence, embedded
            technologies, and interdisciplinary research at CAIIC.
          </p>
        </div>
      </section>

      <section className="team-content">
        <div className="team-container">
          <div className="team-heading">
            <span>RESEARCH SCHOLARS &amp; PROJECT STAFF</span>
            <h2>People Behind Our Research &amp; Innovation</h2>
          </div>

          <div className="team-list">
            {teamMembers.map((member) => (
              <article className="team-member-card" key={member.name}>
                <div className="team-member-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-photo"
                    loading="lazy"
                  />
                </div>

                <div className="team-member-details">
                  <span className="team-member-category">
                    {member.category}
                  </span>

                  <h3>{member.name}</h3>

                  <p className="team-member-role">{member.role}</p>

                  {member.description && (
                    <p className="team-member-description">
                      {member.description}
                    </p>
                  )}

                  {member.expertise && (
                    <p className="team-member-expertise">
                      {member.expertise}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
