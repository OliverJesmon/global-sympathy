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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".global-nav-mobile-menu-button")
      ) {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="global-nav-navbar">
      <div className="global-nav-navbar-inner">
        <NavbarShrink />
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
                tabIndex={0}
                role="button"
                aria-expanded={desktopDropdownOpen}
              >
                OUR WORK ▼
              </div>
              {desktopDropdownOpen && (
                <ul className="global-nav-dropdown-menu">
                  {[
                    { path: "/education", label: "Education" },
                    { path: "/genderjustice", label: "Gender Justice" },
                    { path: "/healthcare", label: "Healthcare" },
                    { path: "/culturalpreserve", label: "Cultural Preservation" },
                    { path: "/ruraldevelopment", label: "Rural Development" },
                    { path: "/disaster", label: "Disaster Relief" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="global-nav-dropdown-item">
                        {item.label}
                      </Link>
                    </li>
                  ))}
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
              <Link to="/about" className="global-nav-mobile-nav-link" onClick={() => setMenuOpen(false)}>
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
                    {[
                      { path: "/education", label: "Education" },
                      { path: "/genderjustice", label: "Gender Justice" },
                      { path: "/healthcare", label: "Healthcare" },
                      { path: "/culturalpreserve", label: "Cultural Preservation" },
                      { path: "/ruraldevelopment", label: "Rural Development" },
                      { path: "/disaster", label: "Disaster Relief" },
                    ].map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="global-nav-mobile-dropdown-item"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link to="/media" className="global-nav-mobile-nav-link" onClick={() => setMenuOpen(false)}>
                MEDIA CENTER
              </Link>
              <Link to="/gallery" className="global-nav-mobile-nav-link" onClick={() => setMenuOpen(false)}>
                GALLERY
              </Link>
              <Link to="/contact" className="global-nav-mobile-nav-link" onClick={() => setMenuOpen(false)}>
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
