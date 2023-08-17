import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onNavigation }) => {
  const handleNavLinkClick = (path) => {
    onNavigation(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={() => handleNavLinkClick("/")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={() => handleNavLinkClick("/signup")}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => handleNavLinkClick("/login")}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => handleNavLinkClick("/about")}>
           About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => handleNavLinkClick("/contact")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/footer" onClick={() => handleNavLinkClick("/footer")}>
            Footer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
