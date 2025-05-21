import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="nav-logo">
          Allen Davis
        </Link>

        {/* Desktop Links (hidden on mobile) */}
        <div className="nav-links">
          <Link to="#projects">Projects</Link>
          <Link to="#about">About</Link>
          <Link to="#contact">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu (shown when hamburger is clicked) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="#about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
