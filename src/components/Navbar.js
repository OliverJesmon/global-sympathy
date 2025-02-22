import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      const mobileMenu = document.querySelector('.global-nav-mobile-menu');
      const mobileMenuButton = document.querySelector('.global-nav-mobile-menu-button');
      
      if (menuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          !mobileMenuButton.contains(event.target)) {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="global-nav-navbar">
      <div className="global-nav-navbar-inner">
        {/* Logo */}
        <div className="global-nav-logo-container">
          <img
            src={logo}
            alt="logo"
            className="global-nav-logo-img"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="global-nav-desktop-nav">
          <div className="global-nav-nav-links">
            <Link to="/about" className="global-nav-nav-link">
              ABOUT
            </Link>
            
            <div className="global-nav-dropdown-container" ref={dropdownRef}>
              <div 
                className="global-nav-dropdown-trigger"
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                onKeyPress={(e) => e.key === 'Enter' && setDesktopDropdownOpen(!desktopDropdownOpen)}
                tabIndex={0}
                role="button"
                aria-expanded={desktopDropdownOpen}
              >
                OUR WORK ▼
              </div>
              {desktopDropdownOpen && (
                <ul className="global-nav-dropdown-menu">
                  <li><Link to="/education" className="global-nav-dropdown-item">Education</Link></li>
                  <li><Link to="/genderjustice" className="global-nav-dropdown-item">Gender Justice</Link></li>
                  <li><Link to="/healthcare" className="global-nav-dropdown-item">Healthcare</Link></li>
                  <li><Link to="/culturalpreserve" className="global-nav-dropdown-item">Cultural Preservation</Link></li>
                  <li><Link to="/ruraldevelopment" className="global-nav-dropdown-item">Rural Development</Link></li>
                </ul>
              )}
            </div>

            <Link to="/media" className="global-nav-nav-link">MEDIA CENTER</Link>
            <Link to="/gallery" className="global-nav-nav-link">GALLERY</Link>
            <Link to="/contact" className="global-nav-nav-link">CONTACT US</Link>
          </div>
          <button 
            className="global-nav-support-button" 
            onClick={() => navigate("/support")}
          >
            SUPPORT CAUSE
          </button>
        </div>

        {/* Mobile Navigation */}
        <button 
          className="global-nav-mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="global-nav-mobile-menu" >
            <Link 
              to="/about" 
              className="global-nav-mobile-nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
            
            <div className="global-nav-mobile-dropdown-container">
              <div 
                className="global-nav-mobile-dropdown-trigger"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                role="button"
                tabIndex={0}
              >
                OUR WORK ▼
              </div>
              
              {mobileDropdownOpen && (
                <ul className="global-nav-mobile-dropdown-menu">
                  <li>
                    <Link 
                      to="/education" 
                      className="global-nav-mobile-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/genderjustice" 
                      className="global-nav-mobile-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Gender Justice
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/healthcare" 
                      className="global-nav-mobile-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/culturalpreservation" 
                      className="global-nav-mobile-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Cultural Preservation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/ruraldevelopment" 
                      className="global-nav-mobile-dropdown-item"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      Rural Development
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link 
              to="/media" 
              className="global-nav-mobile-nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              MEDIA CENTER
            </Link>
            <Link 
              to="/gallery" 
              className="global-nav-mobile-nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              className="global-nav-mobile-nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              CONTACT US
            </Link>
            
            <button
              className="global-nav-mobile-support-button"
              onClick={() => {
                navigate("/support");
                setMenuOpen(false);
              }}
            >
              SUPPORT CAUSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;