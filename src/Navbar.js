import './styles/Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='main'>
      <div className='navlogo'>
        <h1 className='navlogoh1'><span>SRAVANI PILLUTLA</span></h1>
      </div>
      <div className={`navbar-links ${isMobile ? 'mobile-menu' : ''}`}>
        <li className='listitems'>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='list'
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
        </li>
        <li className='listitems'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='list'
            onClick={toggleMobileMenu}
          >
            About
          </Link>
        </li>
        <li className='listitems'>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='list'
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
        </li>
        <li className='listitems'>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='list'
            onClick={toggleMobileMenu}
          >
            Skills
          </Link>
        </li>
        <div className='hamburger' onClick={toggleMobileMenu}>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
      <div>
        <button className='btnNav1'>
          <Link
            to="contact"
            className='btnNav2'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            style={{ textDecoration: "none" }}
            onClick={toggleMobileMenu}
          >
            Contact Me
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
