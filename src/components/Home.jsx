import React from "react";

const Home = () => {
  const homeStyle = {
    backgroundColor: "#1E1E1E",
    padding: "6.25rem 1.25rem", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  };

  const contentBoxStyle = {
    maxWidth: "800px", // Maximum width for content box
    width: "100%", // Full width, so it will adapt to the screen size
    textAlign: "left",
    padding: "2rem", // Padding inside content box
    marginTop: "-3rem", // Pull content box upwards
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "3rem", 
    color: "#eeeeee",
    marginBottom: "1.5rem", 
  };

  const paraStyle = {
    fontSize: "1.75rem", 
    color: "#b0b0b0",
  };

  return (
    <section id="home" style={homeStyle}>
      <div style={contentBoxStyle}>
        <h1 style={headingStyle}>Hey, I'm Vaibhav!</h1>
        <p style={paraStyle}>
          I'm a MERN stack developer and a former professional footballer. 
          I've been building websites since 2023.</p>

          <p style={paraStyle}>When I'm not coding, you'll probably find me watching sci-fi and fantasy movies,
           playing video games, 
          and spending time with my family and friends.
        </p>
      </div>
    </section>
  );
};

export default Home;
