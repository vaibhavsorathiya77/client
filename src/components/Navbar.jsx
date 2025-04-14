import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navStyle = {
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
    fontSize: "22px",
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
    <nav style={navStyle}>
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
          >
            vaibhav.dev
          </h1>
        </Link>
      </div>

      {/* Links */}
      <div style={linkContainerStyle}>
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
        >
          About
        </Link>
        <Link
          to="/projects"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
        >
          Contact
        </Link>

        {/* GitHub Icon */}
        <a
          href="https://github.com/VaibhavAhir77"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#eeeeee")}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
