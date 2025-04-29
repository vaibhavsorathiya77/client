import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    // Optional: Cleanup when component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#1E1E1E",
    borderBottom: "0.5px solid #b0b0b0",
  };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: "#eeeeee",
    textDecoration: "none",
    fontSize: isMobileMenuOpen ? "30px" : "22px",
    transition: "color 0.1s ease",
  };

  const iconStyle = {
    color: "#eeeeee",
    fontSize: "28px",
    transition: "color 0.2s ease",
  };

  const hoverStyle = {
    color: "#FFD700",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    cursor: "pointer",
    alignItems: "center",
  };

  return (
    <nav className="navbar" style={navStyle}>
      {/* Logo + Title */}
      <div style={logoContainerStyle}>
        <img src="/folderlogo.png" alt="Logo" width="30" height="30" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: "#eeeeee",
              margin: "0",
              fontSize: "28px",
              textDecoration: isHovered ? "underline" : "none",
              cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            vaibhav.dev
          </h1>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : "☰"}
      </div>

      {/* Nav Links */}
      <div
        className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}
        style={{
          ...linkContainerStyle,
          display: isMobileMenuOpen ? "flex" : "none",
          flexDirection: isMobileMenuOpen ? "column" : "row",
        }}
      >
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/projects"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        <a
          href="https://github.com/VaibhavAhir77"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      {/* Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: block;
              color: #eeeeee;
              font-size: 28px;
              cursor: pointer;
              z-index: 10001;
            }

            .nav-links {
              display: none;
            }

            .nav-links.mobile-open {
              display: flex;
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: #1E1E1E;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 24px;
              z-index: 10000;
              padding: 1rem;
            }
          }

          @media (min-width: 769px) {
            .hamburger {
              display: none;
            }

            .nav-links {
              display: flex !important;
              flex-direction: row;
              position: static;
              padding: 0;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
