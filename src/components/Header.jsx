const Header = () => {
  return (
    <header className="top-header">
      <div className="header-container">

        <div className="logo-box">
          <img
            src="/logos/left-logo.png"
            alt="Left Logo"
            className="header-logo"
          />
        </div>

        <div className="header-content">

          <h1 className="header-title">
            Centre for Artificial Intelligence and Integrated Circuits (CAIIC)
          </h1>

          <div className="header-university-info">
            <h2>
              OSMANIA UNIVERSITY, HYDERABAD, TELANGANA STATE, INDIA
            </h2>

            <p>
              A University Accredited by NAAC with A+ Grade
            </p>

            <p>
              Category - I Graded Autonomy by UGC
            </p>
          </div>

        </div>

        <div className="logo-box">
          <img
            src="/logos/right-logo.png"
            alt="Right Logo"
            className="header-logo"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;