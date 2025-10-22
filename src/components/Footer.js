import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sichy Café.</h4>
            <p>
              Crafting exceptional coffee experiences since 2022
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/_sichy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/dhesiree21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com/dasuwiii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/menu">Shop Coffee</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Brewing Guides</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>143 Coffee Street<br />Bean District, CA 022103</p>
            <p>ree@dreamcoffee.brew<br />(444) 143-BEAN</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2022 Sichy Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
