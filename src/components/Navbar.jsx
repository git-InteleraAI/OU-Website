import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "R&D/Consultancy", path: "/research-consultancy" },
    { label: "Courses/Workshops", path: "/courses-workshops" },
    { label: "Publications", path: "/publications" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Team", path: "/team" },
    { label: "Opportunities", path: "/opportunities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;