import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-column">
        </div>
        <div class="vl"></div>
        <div className="footer-column">
          <ul>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>HOW TO</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div class="vl"></div>
        <div className="footer-column">
          <ul>
            <li>F.A.Q</li>
            <li>SITEMAP</li>
            <li>CONDITIONS</li>
            <li>LICENSES</li>
          </ul>
        </div>
        <div class="vl"></div>
        <div className="footer-column">
          <div className="social-icons">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          </div>
          <button className="build-your-world-btn">BUILD YOUR WORLD</button>
        </div>
      </div>
      <hr className='line-footer-bottom'/>
      <div className="footer-bottom">
        <p>&copy; 2023 BANK OF AFRICA. All rights reserved</p>
        <div className="footer-logo">
          <img src="/bank-of-africa-logo.png" alt="Bank of Africa Logo" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;