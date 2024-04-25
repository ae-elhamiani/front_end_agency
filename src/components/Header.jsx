import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    
    <header className="header">
        <nav>
        <div className="logo">
          <Link to="/">
            <img src="bank-of-africa-logo.png" alt="Bank of Africa" />
          </Link>
        </div>

          <ul className="nav-menu">
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/how-to">HOW TO</Link></li>
            <li><Link to="/en">EN</Link></li>
          </ul>
        <div className="buttons">
          <Link to="/contact" className="contact-us">CONTACT US</Link>
          <Link to="/my-request" className="my-request">My request</Link>
        </div>
        </nav>
    </header>
  );
}

export default Header;