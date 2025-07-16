import react from "react";

const Footer=()=>{
    const footerStyle = {
        backgroundColor: "#1E1E1E",
        color: "#b0b0b0",
        padding: "2rem 1rem",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "3rem",
      };
    
      const footerLinkStyle = {
        color: "#FFD700",
        textDecoration: "none",
      };
    
      return (
        <footer style={footerStyle}>
          <div style={{ borderTop: "1px solid #444", margin: "10px 0", width: "100%" }} />
          <p>&copy; 2025 Vaibhav Sorathiya. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a href="https://github.com/vaibhavsorathiya77" style={footerLinkStyle}>
              Vaibhav Sorathiya
            </a>
          </p>
        </footer>
      );
    };
export default Footer;