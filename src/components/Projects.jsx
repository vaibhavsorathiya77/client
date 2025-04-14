import React from "react";

const Projects = () => {
  const projectsStyle = {
    backgroundColor: "#1E1E1E",
    padding: "80px 20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "35px",
    color: "#eeeeee",
  };


  return (
    <section id="projects" style={projectsStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <p style={{color:"#b0b0b0", fontSize:"20px"}}>
        Check out my latest work.
        </p>
    </section>
  );
};

export default Projects;
