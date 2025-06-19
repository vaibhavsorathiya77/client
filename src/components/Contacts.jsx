import React from "react";
import Footer from "./Footer";

const Contact = () => {
  const contactStyle = {
    backgroundColor: "#1E1E1E",
    padding: "80px 20px",
    textAlign: "center",
  };

  // const headingStyle = {
  //   fontSize: "35px",
  //   color: "#ffffff",
  // };

  // const paragraphStyle = {
  //   fontSize: "20px",
  // };

  return (
    <>
    <section id="contact" style={contactStyle}>
    <h2 style={{ color: "#eeeeee", }}>Contact Me</h2>
    <p style={{ color: "#b0b0b0", fontSize: "20px" }}>
      Email: ahirvaibhav77@gmail.com    
    </p>
  </section>
    <Footer/>
    </>
  );
};

export default Contact;
