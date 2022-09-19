import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar container">
        <a href="/" className="navbar-brand">
          Ububa.
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
