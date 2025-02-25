
// Footer.jsx
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="foundation-desc">
              Global Sympathy Foundation (GSF) is committed to transforming
              the lives of underprivileged children by providing access to 
              education, nutrition, and overall well-being support.
            </p>
          </div>

          <div className="footer-links-container">
          <div className="footer-column">
          <h4 className="footer-heading">ABOUT US</h4>
          <div className="footer-links">
            <p><Link to='/about' className="footer-link">About</Link></p>
            <p><Link to='/about#ourimpact' className="footer-link">Impact</Link></p>
            <p><Link to='/about#ourStory' className="footer-link">Our Story</Link></p>
            <p><Link to='/about#Coreobjectives' className="footer-link">Our Core Objectives </Link></p>
            <p><Link to='/about#ourProgram' className="footer-link">Our Programs</Link></p>
            <p><Link to='/about#GetInvolved' className="footer-link">Get Involved</Link></p>
          </div>
          </div>
          <div className="footer-column">
              <h4 className="footer-heading">OUR WORK</h4>
              <div className="footer-links">
                <p><Link to='/education' className="footer-link">Education</Link></p>
                <p><Link to='/healthcare' className="footer-link">Health</Link></p>
                <p><Link to='/culturalpreserve' className="footer-link">Cultural Preservation</Link></p>
                <p><Link to='/genderjustice' className="footer-link">Gender Justice</Link></p>
                <p><Link to='/disaster' className="footer-link">Disaster Relief</Link></p>
            </div>
          </div>
        </div>
        </div>
     

        <div className="footer-bottom">
          <address className="footer-address">
            <p>
              Global Sympathy Foundation  ®<br />
              Lover View 103-Pauline Zabeth House,<br />
              Velankani Road, Opp; Cigarette Factory<br />
              Chakala, Andheri East, Mumbai, Maharashtra, India - 400099
            </p>
            <br />
            <p>
            <a href="tel:+91-8828238818" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}>Phone: +91-8828238818<br /></a>
              
            <a href="mailto:gsfindia25@gmail.com" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}>
              Contact Us: | E-mail: gsfindia25@gmail.com</a>
            </p>
          </address>
          
          <div className="social-icons">
          <a href="https://www.instagram.com/" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}><FaInstagram className="social-icon" /></a>
            <a href="https://www.whatsapp.com/" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}><FaWhatsapp className="social-icon" /></a>
            <a href="https://www.facebook.com" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}><FaFacebookF className="social-icon" /></a>
            <a href="https://www.youtube.com" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}><FaYoutube className="social-icon" /></a>
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <hr />
        <p className="copyright-text">
          ©2025 Global Sympathy Foundation All rights reserved. Developed by <a href="https://www.visionflowtech.com" style={{textDecoration:"none", textUnderlineOffset:"none", color:"white"}}>Vision Flow Technologies</a>
        </p>
      </div>
    </footer>
  );
}