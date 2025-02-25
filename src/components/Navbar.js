import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import NavbarShrink from "./NavbarShrink";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
 

  // Unified click outside handler for both desktop dropdown and mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
      // Close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".global-nav-mobile-menu-button")
      ) {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="global-nav-navbar">
      <div className="global-nav-navbar-inner">
        <NavbarShrink />
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
              ABOUT US
            </Link>

            <div className="global-nav-dropdown-container" ref={dropdownRef}>
              <div
                className="global-nav-dropdown-trigger"
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setDesktopDropdownOpen(!desktopDropdownOpen)
                }
                tabIndex={0}
                role="button"
                aria-expanded={desktopDropdownOpen}
              >
                OUR WORK ▼
              </div>
              {desktopDropdownOpen && (
                <ul className="global-nav-dropdown-menu">
                  <li>
                    <Link to="/education" className="global-nav-dropdown-item">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link to="/genderjustice" className="global-nav-dropdown-item">
                      Gender Justice
                    </Link>
                  </li>
                  <li>
                    <Link to="/healthcare" className="global-nav-dropdown-item">
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link to="/culturalpreserve" className="global-nav-dropdown-item">
                      Cultural Preservation
                    </Link>
                  </li>
                  <li>
                    <Link to="/ruraldevelopment" className="global-nav-dropdown-item">
                      Rural Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/disaster" className="global-nav-dropdown-item">
                      Disaster Relief
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/media" className="global-nav-nav-link">
              MEDIA CENTER
            </Link>
            <Link to="/gallery" className="global-nav-nav-link">
              GALLERY
            </Link>
            <Link to="/contact" className="global-nav-nav-link">
              CONTACT US
            </Link>
          </div>
          <button
            className="global-nav-support-button"
            onClick={() => navigate("/support")}
          >
            SUPPORT CAUSE
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="global-nav-menu-main-div">
          <button
            className="global-nav-mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>

          {menuOpen && (
            <div className="global-nav-mobile-menu" ref={mobileMenuRef}>
              <Link
                to="/about"
                className="global-nav-mobile-nav-link"
                onClick={() => setMenuOpen(false)} // Only closes menu, Link handles navigation
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
                        to="/culturalpreserve"
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
                    <li>
                      <Link
                        to="/disaster"
                        className="global-nav-mobile-dropdown-item"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                      >
                        Disaster Relief
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
    </div>
  );
}

export default Navbar;