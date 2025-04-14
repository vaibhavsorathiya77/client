import React from "react";

const About = () => {
  const aboutStyle = {
    backgroundColor: "#1E1E1E",
    padding: "3rem 1.25rem", // Padding on the top and bottom
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh", // Minimum height
    marginTop: "0", // Removed margin on top
  };

  const contentBoxStyle = {
    maxWidth: "800px", // Maximum width for content box
    width: "100%", // Full width, so it will adapt to the screen size
    textAlign: "left",
    padding: "2rem", // Padding inside content box
    marginTop: "-3rem", // Pull content box upwards
    margin: "0 auto", // Centers content box horizontally
  };

  const headingStyle = {
    fontSize: "3rem", // Heading size
    color: "#eeeeee",
    marginBottom: "1.5rem", // Margin below heading for spacing
  };

  const paragraphStyle = {
    fontSize: "1.25rem", // Font size for paragraphs
    color: "#b0b0b0",
    marginBottom: "1.5rem", // Spacing between paragraphs
    lineHeight: "1.6", // Line height for readability
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif", // Font family
  };

  const ulStyle = {
    fontSize: "1.25rem", 
    color: "#b0b0b0",
    marginBottom: "1.5rem", 
    lineHeight: "1.6",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif", 
  };

  return (
    <section id="about" style={aboutStyle}>
      <div style={contentBoxStyle}>
        <h2 style={headingStyle}>About Me</h2>
        
        <p style={paragraphStyle}>
          Hi, I’m Vaibhav! I’ve been crafting websites since 2023, focusing on web development technologies and continuously learning new ways to build intuitive, dynamic user experiences.
        </p>

        <p style={paragraphStyle}>
          Before diving into the tech world, I was a professional footballer, a journey that taught me discipline, teamwork, and the importance of resilience—values I carry with me in my tech career today.
        </p>

        <p style={paragraphStyle}>
          In my free time, I’m an avid gamer. Games like Skyrim, Dead Cells, and any RPGs captivate me, offering an escape into fantastic worlds while honing my problem-solving skills. Gaming isn’t just fun for me; it fuels my creativity and teaches me new perspectives.
        </p>

        <p style={paragraphStyle}>
          I’m a strong believer in the importance of family and friends, and I love spending time with them. Whether it’s playing games together or simply hanging out, these moments keep me grounded. I’m excited about the future of web development and the endless possibilities it holds!
        </p>

        <h2 style={headingStyle}>Contact</h2>
        
        <p style={paragraphStyle}>
          Send me an email to say hi, or connect via the socials.
        </p>
        
        <ul style={ulStyle}>
          <li>
            <strong>Email: <u>ahirvaibhav77</u>@gmail.com</strong>
          </li>
          <li>
            <a href="https://github.com/VaibhavAhir77">
              <strong>Github</strong>
            </a>
          </li>
        </ul>

        <h2 style={headingStyle}>What I'm Doing Now</h2>
        <p style={paragraphStyle}><em>Updated April 8th, 2025 </em></p>

        <ul style={ulStyle}>
          <li>Doing coding </li>
          <li>Playing video games</li>
        </ul>

      </div>
    </section>
  );
};

export default About;
