// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom"; // We'll add routing later

const Header = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="nav-logo">
          Allen Davis
        </Link>
        <div className="nav-links">
          <Link to="#projects">Projects</Link>
          <Link to="#about">About</Link>
          <Link to="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
