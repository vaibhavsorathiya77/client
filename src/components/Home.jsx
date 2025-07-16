import React, { useState, useEffect } from "react";
import useIsMobile from "../responsive/Res";
import GithubButton from "./Github";
import DemoButton from "./Demo";
import Footer from "./Footer";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useIsMobile();

  const homeStyle = {
    backgroundColor: "#1E1E1E",
    padding: "6.25rem 1.25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",               // Ensure full width of the screen
    overflowX: "hidden",         // Prevent horizontal scroll
    overflowY: "auto",           // Allow vertical scrolling if content exceeds
  };
  

  const contentBoxStyle = {
    maxWidth: "800px",   // Prevent exceeding width on larger screens
    width: "100%",       // Make sure it fits the available width
    textAlign: "left",
    padding: "2rem",
    marginTop: "-3rem",  // Pull content box upwards to fix spacing issue
    margin: "0 auto",
    display: "flex",
    flexDirection: "column", // Stack content vertically
    justifyContent: "center",
    alignItems: "flex-start", // Align to the left for larger screens
    boxSizing: "border-box", // Ensure padding does not push out width
  };

  const headingStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)", 
    color: "#eeeeee",
    marginTop: isMobile ? "1rem" : "clamp(1rem, 2.5vw, 15rem)", // Adjust spacing based on screen size
    fontWeight: "bold",
    fontFamily: "'Sora', sans-serif",
    whiteSpace: "normal",        // Allow text wrapping if necessary
    overflow: "visible",        // Ensure text is visible and not clipped
    textOverflow: "clip",        // Avoid cutting off text
  };
  
  // const paraStyle = {
  //   fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
  //   color: "#b0b0b0",
  //   fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Avenir, Helvetica, Arial, sans-serif",
  //   marginBottom: "1.5rem",
  //   lineHeight: "1.8",
  // };

  // Project section card container style
 
  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "2rem",
    maxWidth: "640px",
    marginLeft: isMobile ? "-2rem" : "auto",
    marginRight: isMobile ? "1rem" : "auto",
    padding: "0", // or optional inner padding
    width: "100%",
    boxSizing: "border-box",
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



  return (
    <>
    <section id="home" style={homeStyle}>
      <div style={contentBoxStyle}>
        {/* Heading Section */}
        <h1 style={headingStyle}>Code. Create. Collaborate. Repeat!</h1>
        <p className="para">
          I'm a MERN stack developer and a former professional footballer. I've been building websites since 2023.
        </p>
        <p className="para">
          When I'm not coding, you'll probably find me watching sci-fi and fantasy movies, playing video games, and spending time with my family and friends.
        </p>

        {/* Projects Section */}
        <h1 style={headingStyle}>Projects</h1>
        <p className="para">Open-source projects I've worked on over the years.</p>

        {/* Card Container for Projects */}
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
            <GithubButton link="https://github.com/vaibhavsorathiya77/expense-tracker" text="Source" />
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
            <GithubButton link="https://github.com/vaibhavsorathiya77/Weather_App" text="Source"/>
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
            <GithubButton link="https://github.com/vaibhavsorathiya77/MoviesLovers" text="Source"/>
            <DemoButton link="https://moviesloversbyv.netlify.app/" text="Demo"/>
          </div>
        </div>

        

        </div>
 
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Home;
