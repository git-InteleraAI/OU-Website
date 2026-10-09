import "./ResearchConsultancy.css";

const researchProjects = [
  {
    sr: 1,
    scheme:
      'Feasibility of Polar CODEC for Satellite Navigation System” under RESPOND Scheme, ISRO',
    investigator: "Prof. P. Chandrasekhar",
    fundingAgency: "ISRO, Government of India (2025-28)",
    amount: "44,95,000",
    status: "Ongoing",
    startedYear: "2025-26",
    completedYear: "—",
    year: "2026-27",
  },
  {
    sr: 2,
    scheme:
      'The Design, Fabrication and Development of Silicon Proven IP Core for High Resolution ADPLL” under Chips to Startup (C2S) Programme',
    investigator: "Prof. P. Chandrasekhar",
    fundingAgency: "MeitY, Government of India",
    amount: "1,91,50,000",
    status: "Ongoing",
    startedYear: "2023-24",
    completedYear: "—",
    year: "2026-27",
  },
  {
    sr: 3,
    scheme:
      'Development of GNSS Waveform Generators and Receiver Algorithms”, MathWorks',
    investigator: "Prof. P. Chandrasekhar",
    fundingAgency: "MathWorks India Private Ltd",
    amount: "31,50,000",
    status: "Completed",
    startedYear: "2023-24",
    completedYear: "2025-26",
    year: "2023-24",
  },
  {
    sr: 4,
    scheme:
      'PI for BIRAC fellowship program named SPARSH for “Local Language Voice based Healthcare and Emergency Assistance Device for Elderly',
    investigator: "Prof. P. Chandrasekhar",
    fundingAgency: "BIRAC fellowship",
    amount: "5,00,000",
    status: "Completed",
    startedYear: "2020-21",
    completedYear: "2022-23",
    year: "2020-21",
  },
  {
    sr: 5,
    scheme: "GNSS Software Receivers: Baseband algorithms using FPGA, UGC",
    investigator: "Prof. P. Chandrasekhar",
    fundingAgency: "UGC",
    amount: "15,00,000",
    status: "Completed",
    startedYear: "2013-14",
    completedYear: "2015-16",
    year: "2012-13",
  },
  {
    sr: 6,
    scheme: "CARS",
    investigator: "P. Chandra Sekhar",
    fundingAgency: "DRDO",
    amount: "9,84,170",
    status: "Completed",
    startedYear: "2014-15",
    completedYear: "2015-16",
    year: "2015-16",
  },
  {
    sr: 7,
    scheme: "CSIR-SRF",
    investigator: "P. Chandra Sekhar",
    fundingAgency: "CSIR",
    amount: "5,34,000",
    status: "Completed",
    startedYear: "2015-16",
    completedYear: "2017-18",
    year: "2015-16",
  },
  {
    sr: 8,
    scheme: "CARS",
    investigator: "P. Chandra Sekhar",
    fundingAgency: "DRDO",
    amount: "9,90,000",
    status: "Completed",
    startedYear: "2017-18",
    completedYear: "2018-19",
    year: "2018-19",
  },
];

const ResearchConsultancy = () => {
  return (
    <main className="rd-page">
      <section className="rd-hero">
        <div className="rd-hero-inner">
          <span className="rd-badge">CAIIC</span>
          <h1>R&amp;D / Consultancy</h1>
          <p>
            Research and development initiatives supported by national agencies,
            industry partners, and collaborative programmes.
          </p>
        </div>
      </section>

      <section className="rd-content">
        <div className="rd-container">
          <div className="rd-section-heading">
            <span>RESEARCH &amp; DEVELOPMENT</span>
            <h2>Research Projects</h2>
            <p>Completed or Ongoing / Major or Minor Projects</p>
          </div>

          <div className="rd-table-card">
            <div className="rd-table-scroll">
              <table className="rd-table">
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Scheme / Programme</th>
                    <th>Principal Investigator</th>
                    <th>Funding Agency</th>
                    <th>Amount (₹)</th>
                    <th>Status</th>
                    <th>Started Year</th>
                    <th>Completed Year</th>
                    <th>Year</th>
                  </tr>
                </thead>

                <tbody>
                  {researchProjects.map((project) => (
                    <tr key={project.sr}>
                      <td>{project.sr}</td>
                      <td>{project.scheme}</td>
                      <td>{project.investigator}</td>
                      <td>{project.fundingAgency}</td>
                      <td className="rd-amount">{project.amount}</td>
                      <td>
                        <span
                          className={`rd-status ${
                            project.status === "Ongoing"
                              ? "rd-status-ongoing"
                              : "rd-status-completed"
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td>{project.startedYear}</td>
                      <td>{project.completedYear}</td>
                      <td>{project.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchConsultancy;
