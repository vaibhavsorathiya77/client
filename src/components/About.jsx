import React from "react";
import useIsMobile from "../responsive/Res";
import Footer from "./Footer";

const About = () => {
  const isMobile = useIsMobile();

  const aboutStyle = {
    backgroundColor: "#1E1E1E",
    padding: "3rem 1.25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    marginTop: "0",
  };

  const contentBoxStyle = {
    maxWidth: "800px",
    width: "100%",
    textAlign: "left", // Always left aligned now
    padding: "2rem",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)", // scales between 2.5rem and 3rem
    color: "#eeeeee",
    marginBottom: "1.5rem",
    fontFamily: "'Sora', sans-serif",
  };

  const paragraphStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)", // scales between 1rem and 1.5rem
    color: "#b0b0b0",
    marginBottom: "1.5rem",
    lineHeight: "1.8",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
  };

  const ulStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    color: "#b0b0b0",
    marginBottom: "1.5rem",
    lineHeight: "1.8",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
    listStylePosition: "inside",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#FFD700",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  const footerStyle={
    backgroundColor: "#1E1E1E",
    color: "#b0b0b0",
    padding: "2rem 1rem",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    width: "100%",
    boxSizing: "border-box",
    marginTop: isMobile ? "3rem" : "",
    margin: "3rem auto 0", // centers on all screens
  };

  const footerLinkStyle={
    color: "#FFD700",
    textDecoration: "none",
  };

  return (
      <>
    <section id="about" style={aboutStyle}>
      <div style={contentBoxStyle}>
        <h2 style={headingStyle}>About Me</h2>

        <p style={paragraphStyle}>
          Hi, I’m Nishit Sorathiya I’ve been crafting websites since 2023, focusing on web development technologies and continuously learning new ways to build intuitive, dynamic user experiences.
        </p>

        <p style={paragraphStyle}>
          Before diving into the tech world, I was a <span style={{ color: "#FFD700" }}>professional footballer</span>, a journey that taught me discipline, teamwork, and the importance of resilience—values I carry with me in my tech career today.
        </p>

        <p style={paragraphStyle}>
          In my free time, <span style={{ color: "#FFD700" }}>I’m an avid gamer.</span> Games like <i>Skyrim</i>, <i>Dead Cells</i>, and RPGs captivate me, offering an escape into fantastic worlds while honing my problem-solving skills.
        </p>

        <p style={paragraphStyle}>
          <span style={{ color: "#FFD700" }}>I’m a strong believer</span> in the importance of family and friends. Whether it’s playing games together or just hanging out, these moments keep me grounded.
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
            <a href="https://github.com/vaibhavsorathiya77" style={linkStyle} target="_blank" rel="noopener noreferrer">
              <strong>Github</strong>
            </a>
          </li>
        </ul>

        <h2 style={headingStyle}>What I'm Doing Now</h2>

        <p style={paragraphStyle}><em>Updated July 13th, 2025</em></p>

        <ul style={ulStyle}>
          <li>Doing coding</li>
          <li>Playing video games</li>
          <li>Watching SUITS (TV series)</li>
        </ul>

        <h2 style={headingStyle}>Tools</h2>

        <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#eeeeee" }}>Software</h3>

        <p style={paragraphStyle}>
          This website is hosted on Netlify and built with the React framework.
        </p>

        <ul style={ulStyle}>
          <li>
            Coding: <a href="https://code.visualstudio.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Visual Studio Code</a>
          </li>
        </ul>

        {/* <h2 style={headingStyle}>Songs</h2>

        <ul style={ulStyle}>
          {[
            { name: "Everybody", link: "https://open.spotify.com/track/1di1BEgJYzPvXUuinsYJGP?si=c6dc45e3d5cf41db" },
            { name: "Roi", link: "https://open.spotify.com/track/7LPGJhkRDEW6KopWhD8DbX?si=9e1f9759c9564a22" },
            { name: "Aaj ki Raat", link: "https://open.spotify.com/track/4bPF3oy4JsKK1UeMMn7Byf?si=70ef617971c34c43" },
            { name: "I Wanna Be Yours", link: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=382c37821304440b" },
            { name: "Saat Samundar Paar", link: "https://open.spotify.com/track/5R6T1zVAE6cpBorNs8MVGU?si=9000b8a3d5244390" },
          ].map((song, idx) => (
            <li key={idx}>
              <a 
                href={song.link} 
                style={linkStyle} 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
              >
                {song.name}
              </a>
            </li>
          ))}
        </ul> */}

        <h2 style={headingStyle}>Miscellaneous</h2>

        <ul style={ulStyle}>
   <li>
    Access Resume:{" "}
    <a
      href="/Vaibhav_Sorathiya_Resume.pdf"
      // href="/Vaibhav_Sorathiya.pdf"
      // download="Vaibhav_Sorathiya_Resume.pdf"
      style={linkStyle}
      onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
      onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
    >
      Resume
    </a>
  </li>
          {/* <li>
            Fast and accurate typing: <span style={{ ...paragraphStyle, color: "#FFD700" }}>60 WPM with 94% accuracy</span>
          </li> */}
        </ul>
      </div>

    </section>
    <Footer/>
    </>
  );
};

export default About;
