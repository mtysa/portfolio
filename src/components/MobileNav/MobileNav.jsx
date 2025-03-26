import React from "react";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <nav className="mobile-tab-bar">
      <a href="#" className="tab-link" aria-label="Home">
        🏠
      </a>
      <a href="#" className="tab-link" aria-label="Portfolio">
        💼
      </a>
      <a href="#about" className="tab-link" aria-label="About">
        ℹ️
      </a>
      <a href="#contact" className="tab-link" aria-label="Contact">
        ✉️
      </a>
    </nav>
  );
};

export default MobileNav;
