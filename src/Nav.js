import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Nav">
      <div className="Nav__hamburger" onClick={toggleDropdown}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`Nav__menu ${isOpen ? 'Nav__menu--open' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleDropdown}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleDropdown}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} onClick={toggleDropdown}>
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleDropdown}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
