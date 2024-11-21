// Layout/content of footer consistently displayed at bottom of application
import React from 'react';
//import './Footer.css'; // Assuming you have a CSS file for styling

// Layout/content of footer consistently displayed at bottom of application
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2023 My Application. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;