import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/research-consultancy"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          R&D/Consultancy
        </NavLink>

        <NavLink
          to="/courses-workshops"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Courses/Workshops
        </NavLink>

        <NavLink
          to="/publications"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Publications
        </NavLink>

        <NavLink
          to="/infrastructure"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Infrastructure
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/opportunities"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Opportunities
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/grievance-redressal"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Grievance Redressal
        </NavLink>

        <NavLink
          to="/csr-support"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          CSR & Research Support
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact Us
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;