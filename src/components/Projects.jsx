import React from "react";
import useIsMobile from "../responsive/Res";
import DemoButton from "./Demo";
import GithubButton from "./Github";


const Projects = () => {
  const isMobile = useIsMobile();

  const projectsStyle = {
    backgroundColor: "#1E1E1E",
    padding: "80px 20px",
    textAlign: "center",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    color: "#eeeeee",
    marginBottom: "2rem",
    fontFamily: "'Sora', sans-serif",
  };

  const paragraphStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    color: "#b0b0b0",
    marginBottom: "1.5rem",
    lineHeight: "1.8",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
  };

  const cardContainerStyle = {
    display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
  gap: "20px",
  marginTop: "2rem",
  maxWidth: "640px",
  marginLeft: "auto",
  marginRight: "auto",
  };

  const glassCardStyle = {
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "16px",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "20px",
    width: "280px",
    color: "#ffffff",
    textAlign: "left",
    transition: "transform 0.3s ease",
  };

  const cardHeadingStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color:"#FFD700",
    fontFamily: "'Sora', sans-serif",
  };

  const cardDescriptionStyle = {
    fontSize: "1rem",
    marginBottom: "15px",
    color: "#d1d1d1",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
  };

  const footerStyle={
    backgroundColor: "#1E1E1E",
    color: "#b0b0b0",
    padding: "10px 20px",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    bottom: "0",
    width: "100%",
    boxSizing: "border-box",
  };

  const footerLinkStyle={
    color: "#FFD700",
    textDecoration: "none",
  };

  // const hrStyle = {
  //   border: "0",
  //   borderTop: "1px solid #444", // Adds color to the line
  //   margin: "10px 0", // Adds space around the line
  //   width: "100%", // Ensures it spans the full width of the container
  // };

  return (
    <section id="projects" style={projectsStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <p style={paragraphStyle}>
        Projects I've made over the years, including this website.
      </p>

      <div style={cardContainerStyle}>
        {/* Glass Card 1 */}
        <div style={glassCardStyle}>
          <h3 style={cardHeadingStyle}>My Portfolio Website</h3>
          <p style={cardDescriptionStyle}>
          The source of this website.
          </p>
          <GithubButton link="https://github.com/yourgithub/portfolio" text="Source"/>
        </div>

        {/* Glass Card 2 */}
        <div style={glassCardStyle}>
          <h3 style={cardHeadingStyle}>Expense Tracker</h3>
          <p style={cardDescriptionStyle}>
          Make Money Behave.
          </p>
          {/* Container for buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "left" }}>
            <GithubButton link="https://github.com/VaibhavAhir77/expense-tracker" text="Source" />
            <DemoButton link="https://expensetracker-vs7.netlify.app " text="Demo"/>
          </div>
        </div>
        {/* Glass Card 3 */}
        <div style={glassCardStyle}>
          <h3 style={cardHeadingStyle}>Weather Web</h3>
          <p style={cardDescriptionStyle}>
          No Bad Surprises.
          </p>
          <div style={{display:"flex", gap:"1rem", marginTop:"1rem", justifyContent:"left"}}>
            <GithubButton link="https://github.com/VaibhavAhir77/Weather_App" text="Source"/>
            <DemoButton link="https://vaibhavahir77.github.io/Weather_App/" text="Demo"/>
          </div>
        </div>
        {/* Glass Card 4 */}
        <div style={glassCardStyle}>
          <h3 style={cardHeadingStyle} > 
            Movies Lover</h3>
          <p style={cardDescriptionStyle}>
          No Hassle, Just Movies.
          </p>
          <div style={{display:"flex", gap:"1rem",marginTop:"1rem", justifyContent:"left"}}>
            <GithubButton link="https://github.com/VaibhavAhir77/MoviesLovers" text="Source"/>
            <DemoButton link="https://moviesloversbyv.netlify.app/" text="Demo"/>
          </div>
        </div>
        {/* {Glass Card 5} */}
      </div>
        {/* Footer Section */}
        <footer style={footerStyle}>
        <div style={{ borderTop: "1px solid #444", margin: "10px 0", width: "100%" }} />
          <p>&copy; 2025 Vaibhav Sorathiya. All rights reserved. </p>
          <p>
        Designed and Developed by <a href="https://github.com/VaibhavAhir77" style={footerLinkStyle}>Vaibhav Ahir</a>
      </p>
        </footer>
    </section>
  );
};

export default Projects;
