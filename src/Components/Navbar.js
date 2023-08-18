import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onNavigation }) => {
  const handleNavLinkClick = (path) => {
    onNavigation(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleNavLinkClick("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => handleNavLinkClick("/signup")}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => handleNavLinkClick("/login")}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => handleNavLinkClick("/about")}>
           About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => handleNavLinkClick("/contact")}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/footer" onClick={() => handleNavLinkClick("/footer")}>
            Footer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
