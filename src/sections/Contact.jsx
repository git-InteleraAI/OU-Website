import "./Contact.css";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-5.35 7-12a7 7 0 1 0-14 0c0 6.65 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-badge">CAIIC</span>
          <h1>Contact Us</h1>
          <p>
            Connect with the Centre for Artificial Intelligence and Integrated
            Circuits, Osmania University.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-profile">
            <div className="contact-profile-photo-wrap">
              <img
                src="/images/contact/prof-chandra-sekhar.png"
                alt="Prof. P. Chandra Sekhar"
                className="contact-profile-photo"
              />
            </div>

            <div className="contact-profile-info">
              <span className="contact-profile-label">CONTACT PERSON</span>
              <h2>Prof. P. Chandra Sekhar</h2>
              <p>
                Professor, Department of Electronics and Comm. Engg.
              </p>
            </div>
          </div>

          <div className="contact-cards">
            <article className="contact-card">
              <div className="contact-icon">
                <LocationIcon />
              </div>

              <h3>Address</h3>

              <p>
                Technology Development Center, B-20, Osmania University Main Rd,
                Osmania University, Amberpet, Hyderabad, Telangana 500007
              </p>
            </article>

            <article className="contact-card">
              <div className="contact-icon">
                <MailIcon />
              </div>

              <h3>Email</h3>

              <a href="mailto:aiicou2024@gmail.com">
                aiicou2024@gmail.com
              </a>
            </article>

            <article className="contact-card">
              <div className="contact-icon">
                <ClockIcon />
              </div>

              <h3>Office Hours</h3>

              <p>
                Mon–Sat: 10:00 AM – 5:00 PM
                <br />
                <span>(Closed on Public Holidays)</span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
