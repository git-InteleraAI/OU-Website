import { useState } from "react";
import "./CSRResearchSupport.css";

const supportAreas = [
  { title: "State-of-the-Art Laboratory Infrastructure", text: "Establish and upgrade laboratories with modern instruments, test equipment, workstations, measurement systems and research facilities.", support: "Equipment procurement, laboratory upgrades, installation and maintenance." },
  { title: "Semiconductor, VLSI & Embedded Systems", text: "Strengthen practical training and research in semiconductor design, IC design and validation, embedded systems and hardware development.", support: "EDA software, development boards, test instruments and design infrastructure." },
  { title: "AI, Robotics & Emerging Technologies", text: "Enable research and prototyping in artificial intelligence, edge computing, intelligent automation, robotics and related engineering applications.", support: "Computing systems, GPUs, robotics platforms, sensors and prototyping tools." },
  { title: "Student Skill Development & Training", text: "Provide hands-on training, industry-oriented workshops, certification programmes and practical exposure to emerging technologies.", support: "Training programmes, expert sessions, learning resources and student project expenses." },
  { title: "Research & Innovation Support", text: "Encourage faculty and student research, proof-of-concept development, prototype validation and industry-sponsored research.", support: "Approved project costs, research materials, prototyping and testing." },
  { title: "Scholarships & Student Opportunities", text: "Expand access to technical education and practical research opportunities for eligible students under approved institutional schemes.", support: "Approved scholarships, student project grants and training assistance." },
];

const supportTypes = [
  { title: "Financial Support", text: "CSR funding or other financial contributions routed through the university's authorised process." },
  { title: "Equipment & Infrastructure", text: "New or suitable instruments, computing systems, laboratory equipment and hardware." },
  { title: "Software & Technology", text: "EDA tools, research software, academic licences, cloud credits and technical platforms." },
  { title: "Training & Mentorship", text: "Industry experts, hands-on workshops, internships, certification programmes and project mentoring." },
  { title: "Industry Collaboration", text: "Joint research, sponsored projects, prototype development, testing and technology transfer." },
];

function CSRResearchSupport() {
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById("csr-enquiry-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="csr-page">
      <section className="csr-hero">
        <div className="csr-hero-inner">
          <span className="csr-badge">CAIIC · PARTNERSHIPS & IMPACT</span>
          <h1>CSR & Research Support</h1>
          <p>Partner with CAIIC to strengthen research infrastructure, technology development, student skills and industry–academia collaboration.</p>
          <button type="button" className="csr-hero-button" onClick={scrollToForm}>Partner With Our Centre</button>
        </div>
      </section>

      <section className="csr-intro-section">
        <div className="csr-container csr-intro-layout">
          <div className="csr-intro-heading">
            <span>PARTNER WITH US</span>
            <h2>Building future-ready research and innovation infrastructure</h2>
            <div className="csr-accent-line" />
          </div>
          <div className="csr-intro-copy">
            <p>The Centre for Artificial Intelligence and Integrated Circuits (CAIIC), University College of Engineering, Osmania University, is committed to strengthening engineering education, advanced research, technology development and industry–academia collaboration.</p>
            <p>We welcome engagement from CSR partners, industries, alumni, philanthropic organisations and other eligible stakeholders to support advanced laboratory facilities, research infrastructure, student skill development and innovation in emerging technologies.</p>
            <p>Partnerships may include equipment sponsorships, research infrastructure support, software and technology support, technical collaboration, training and other contributions aligned with applicable regulations and approved university procedures.</p>
          </div>
        </div>
      </section>

      <section className="csr-areas-section">
        <div className="csr-container">
          <div className="csr-section-heading">
            <span>AREAS OF SUPPORT</span>
            <h2>Where partnership can create impact</h2>
            <p>Organisations can support focused initiatives that strengthen infrastructure, research capability and student development.</p>
          </div>

          <div className="csr-areas-grid">
            {supportAreas.map((item, index) => (
              <article className="csr-area-card" key={item.title}>
                <div className="csr-card-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="csr-support-detail">
                  <strong>Potential support</strong>
                  <span>{item.support}</span>
                </div>
                <button type="button" onClick={scrollToForm}>Support This Initiative</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-types-section">
        <div className="csr-container">
          <div className="csr-section-heading csr-heading-light">
            <span>TYPES OF SUPPORT</span>
            <h2>Partnership is not limited to funding</h2>
            <p>Support may be financial, technical, infrastructural or knowledge-based, subject to the university's approved process.</p>
          </div>

          <div className="csr-types-grid">
            {supportTypes.map((item) => (
              <article className="csr-type-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-proposal-section">
        <div className="csr-proposal-card">
          <div>
            <span>PROJECT-BASED SUPPORT</span>
            <h2>Clear proposals. Measurable outcomes.</h2>
          </div>
          <div className="csr-proposal-list">
            <p>For approved initiatives, detailed project proposals can include objectives, existing facilities and identified gaps, proposed equipment or infrastructure, estimated budget, beneficiaries, expected outcomes, implementation timeline and utilisation reporting.</p>
            <p>This helps potential partners evaluate how their support can contribute to academic, research and societal impact.</p>
          </div>
        </div>
      </section>

      <section className="csr-form-section" id="csr-enquiry-form">
        <div className="csr-container csr-form-layout">
          <div className="csr-form-info">
            <span>PARTNERSHIP ENQUIRY</span>
            <h2>Start a conversation with CAIIC</h2>
            <p>Share your organisation's area of interest and proposed form of support. The information can then be reviewed through the appropriate university process.</p>
            <div className="csr-form-note">
              <strong>Important</strong>
              <p>This form is a partnership enquiry only. It does not constitute an automatic payment, donation confirmation, CSR approval or funding acceptance.</p>
            </div>
          </div>

          <form className="csr-form" onSubmit={handleSubmit}>
            <div className="csr-form-grid">
              <div className="csr-field"><label htmlFor="csr-org">Organisation Name <span>*</span></label><input id="csr-org" name="organisation" type="text" required /></div>
              <div className="csr-field"><label htmlFor="csr-person">Contact Person <span>*</span></label><input id="csr-person" name="contactPerson" type="text" required /></div>
              <div className="csr-field"><label htmlFor="csr-email">Official Email <span>*</span></label><input id="csr-email" name="email" type="email" required /></div>
              <div className="csr-field"><label htmlFor="csr-phone">Contact Number <span>*</span></label><input id="csr-phone" name="phone" type="tel" required /></div>

              <div className="csr-field">
                <label htmlFor="csr-org-type">Organisation Type <span>*</span></label>
                <select id="csr-org-type" name="organisationType" required defaultValue="">
                  <option value="" disabled>Select organisation type</option>
                  <option>Corporate</option><option>PSU</option><option>Industry</option><option>Alumni</option><option>Foundation</option><option>Other</option>
                </select>
              </div>

              <div className="csr-field">
                <label htmlFor="csr-interest">Area of Interest <span>*</span></label>
                <select id="csr-interest" name="areaOfInterest" required defaultValue="">
                  <option value="" disabled>Select area</option>
                  <option>Equipment</option><option>Infrastructure</option><option>Research</option><option>Training</option><option>Scholarships</option><option>Other</option>
                </select>
              </div>

              <div className="csr-field">
                <label htmlFor="csr-support-type">Type of Support <span>*</span></label>
                <select id="csr-support-type" name="supportType" required defaultValue="">
                  <option value="" disabled>Select support type</option>
                  <option>Funding</option><option>Equipment</option><option>Software</option><option>Expertise</option><option>Partnership</option>
                </select>
              </div>

              <div className="csr-field"><label htmlFor="csr-contribution">Proposed Contribution</label><input id="csr-contribution" name="contribution" type="text" placeholder="Amount or in-kind support" /></div>
              <div className="csr-field csr-field-full"><label htmlFor="csr-description">Project / Partnership Description <span>*</span></label><textarea id="csr-description" name="description" rows="6" required /></div>
              <div className="csr-field csr-field-full">
                <label htmlFor="csr-document">Supporting Document</label>
                <input id="csr-document" name="document" type="file" accept=".pdf,.doc,.docx" />
                <small>Optional. Permanent file storage requires backend integration.</small>
              </div>
            </div>

            <button type="submit" className="csr-submit-button">Submit Partnership Enquiry</button>
            {submitted && <div className="csr-success" role="status">Thank you for your interest in supporting CAIIC. Your details have been entered successfully. Backend submission and enquiry tracking can be connected when the partnership API is added.</div>}
            <p className="csr-required-note">Fields marked with <span>*</span> are mandatory.</p>
          </form>
        </div>
      </section>

      <section className="csr-compliance-section">
        <div className="csr-container">
          <div className="csr-compliance-card">
            <span>TRANSPARENCY & COMPLIANCE</span>
            <h2>Support through approved university procedures</h2>
            <p>CSR eligibility depends on the nature of the proposed activity, the recipient arrangement and applicable rules. Before accepting or advertising contributions, the appropriate funding route, university authorisation, documentation and compliance conditions should be confirmed with the university administration.</p>
            <p>Partner names, logos, financial details, photographs and impact information should be published only after verification and the required permissions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CSRResearchSupport;
