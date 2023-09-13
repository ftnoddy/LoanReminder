import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onNavigation }) => {
  const handleNavLinkClick = (path) => {
    onNavigation(path);
  };

  return (
    <nav>
      <ul>
        <li className="home">
          <Link to="/" onClick={() => handleNavLinkClick("/")}>
            Home
          </Link>
        </li>
        <li className="signup">
          <Link to="/signup" onClick={() => handleNavLinkClick("/signup")}>
            Sign Up
          </Link>
        </li>
        {/* <li className="login">
          <Link to="/login" onClick={() => handleNavLinkClick("/login")}>
            Login
          </Link>
        </li> */}
        <li className="about">
          <Link to="/about" onClick={() => handleNavLinkClick("/about")}>
            About
          </Link>
        </li>
        <li className="contact">
          <Link to="/contact" onClick={() => handleNavLinkClick("/contact")}>
            Contact
          </Link>
        </li>
        <li className="dashboard-link">
          <Link to="/dashboard" className="dashboard-button" onClick={() => handleNavLinkClick("/dashboard")}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
