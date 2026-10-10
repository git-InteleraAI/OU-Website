import { useState } from "react";
import "./GrievanceRedressal.css";

const grievanceTypes = [
  { title: "Laboratory Facilities", text: "Equipment availability, maintenance, infrastructure and laboratory access-related issues." },
  { title: "Technical Support", text: "Issues involving computers, software, instruments, networks and research tools." },
  { title: "Safety & Security", text: "Laboratory safety, equipment hazards and security-related concerns." },
  { title: "Student & Research Support", text: "Research access, training facilities and laboratory-related academic support." },
  { title: "Administrative Issues", text: "Laboratory scheduling, approvals and procedural concerns." },
  { title: "Suggestions & Feedback", text: "Constructive ideas to improve facilities, research outcomes and laboratory services." },
];

const processSteps = [
  { number: "01", title: "Submit", text: "Submit the grievance with the required details through the online form." },
  { number: "02", title: "Review", text: "The submission is reviewed and directed to the appropriate authority for consideration." },
  { number: "03", title: "Resolution", text: "The concerned authority examines the matter and takes appropriate action." },
  { number: "04", title: "Closure & Feedback", text: "An update is communicated after review and feedback may be collected where appropriate." },
];

function GrievanceRedressal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="grievance-page">
      <section className="grievance-hero">
        <div className="grievance-hero-inner">
          <span className="grievance-badge">CAIIC · SUPPORT & GOVERNANCE</span>
          <h1>Grievance Redressal</h1>
          <p>A transparent and structured channel for raising concerns, sharing feedback and seeking support related to the Centre.</p>
        </div>
      </section>

      <section className="grievance-intro-section">
        <div className="grievance-container grievance-intro-grid">
          <div className="grievance-intro-heading">
            <span>OUR COMMITMENT</span>
            <h2>A fair, confidential and supportive process</h2>
            <div className="grievance-accent-line" />
          </div>
          <div className="grievance-intro-copy">
            <p>The Centre for Artificial Intelligence and Integrated Circuits (CAIIC), University College of Engineering, Osmania University, is committed to maintaining a transparent, inclusive and supportive environment for students, research scholars, faculty, staff, industry collaborators and other stakeholders.</p>
            <p>This facility provides a formal channel for submitting concerns, complaints and suggestions related to laboratory facilities, equipment usage, research activities, safety, technical support, administrative procedures and other matters concerning the functioning of the Centre.</p>
          </div>
        </div>
      </section>

      <section className="grievance-types-section">
        <div className="grievance-container">
          <div className="grievance-section-heading">
            <span>TYPES OF GRIEVANCES</span>
            <h2>How we can assist</h2>
            <p>Select the category that most closely matches your concern while submitting the form.</p>
          </div>
          <div className="grievance-types-grid">
            {grievanceTypes.map((item, index) => (
              <article className="grievance-type-card" key={item.title}>
                <div className="grievance-type-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grievance-process-section">
        <div className="grievance-container">
          <div className="grievance-section-heading grievance-heading-light">
            <span>GRIEVANCE PROCESS</span>
            <h2>Simple, structured and transparent</h2>
          </div>
          <div className="grievance-process-grid">
            {processSteps.map((step) => (
              <article className="grievance-process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grievance-form-section">
        <div className="grievance-container grievance-form-layout">
          <div className="grievance-form-info">
            <span>ONLINE SUBMISSION</span>
            <h2>Submit a Grievance</h2>
            <p>Please provide complete and accurate information so that your concern can be reviewed appropriately.</p>
            <div className="grievance-info-note">
              <strong>Confidentiality</strong>
              <p>Personal information and supporting documents should be handled only through authorised university processes.</p>
            </div>
            <div className="grievance-info-note">
              <strong>Urgent safety matters</strong>
              <p>Immediate safety threats or emergencies should be reported directly to the appropriate university authority or emergency service and should not rely only on this online form.</p>
            </div>
          </div>

          <form className="grievance-form" onSubmit={handleSubmit}>
            <div className="grievance-form-grid">
              <div className="grievance-field"><label htmlFor="gr-name">Full Name <span>*</span></label><input id="gr-name" name="name" type="text" required /></div>
              <div className="grievance-field"><label htmlFor="gr-email">Email Address <span>*</span></label><input id="gr-email" name="email" type="email" required /></div>
              <div className="grievance-field"><label htmlFor="gr-mobile">Mobile Number</label><input id="gr-mobile" name="mobile" type="tel" /></div>
              <div className="grievance-field">
                <label htmlFor="gr-stakeholder">Stakeholder Category <span>*</span></label>
                <select id="gr-stakeholder" name="stakeholder" required defaultValue="">
                  <option value="" disabled>Select category</option>
                  <option>Student</option><option>Research Scholar</option><option>Faculty</option><option>Staff</option><option>Industry</option><option>Other</option>
                </select>
              </div>
              <div className="grievance-field">
                <label htmlFor="gr-category">Grievance Category <span>*</span></label>
                <select id="gr-category" name="category" required defaultValue="">
                  <option value="" disabled>Select grievance type</option>
                  {grievanceTypes.map((item) => <option key={item.title}>{item.title}</option>)}
                </select>
              </div>
              <div className="grievance-field">
                <label htmlFor="gr-response">Preferred Response Method <span>*</span></label>
                <select id="gr-response" name="responseMethod" required defaultValue="">
                  <option value="" disabled>Select method</option><option>Email</option><option>Phone</option>
                </select>
              </div>
              <div className="grievance-field grievance-field-full"><label htmlFor="gr-subject">Subject <span>*</span></label><input id="gr-subject" name="subject" type="text" required /></div>
              <div className="grievance-field grievance-field-full"><label htmlFor="gr-description">Detailed Description <span>*</span></label><textarea id="gr-description" name="description" rows="6" required /></div>
              <div className="grievance-field grievance-field-full">
                <label htmlFor="gr-document">Supporting Document</label>
                <input id="gr-document" name="document" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
              </div>
              <label className="grievance-declaration grievance-field-full"><input type="checkbox" required /><span>I confirm that the information provided above is accurate to the best of my knowledge.</span></label>
            </div>

            <button type="submit" className="grievance-submit-button">Submit Grievance</button>
            {submitted && <div className="grievance-success" role="status">Your grievance details have been entered successfully. Backend submission, reference-number generation and status tracking can be connected when the grievance API is added.</div>}
            <p className="grievance-required-note">Fields marked with <span>*</span> are mandatory.</p>
          </form>
        </div>
      </section>

      <section className="grievance-footer-note">
        <div className="grievance-container">
          <p>Official grievance officer details, response timelines and escalation procedures should be published only after approval by the competent university authority.</p>
        </div>
      </section>
    </main>
  );
}

export default GrievanceRedressal;
