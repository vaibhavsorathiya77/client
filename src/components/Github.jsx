import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton = ({ link, text = "Source" }) => {
  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1.2rem",
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    textDecoration: "none",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
    fontWeight: "600",
    backdropFilter: "blur(8px)",
    transition: "all 0.4s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.2)";
    e.target.style.color = "#1E1E1E";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.05)";
    e.target.style.color = "#ffffff";
  };

  return (
    <a
      href={link}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={20} />
      {text}
    </a>
  );
};
export default GithubButton;