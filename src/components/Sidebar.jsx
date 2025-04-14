import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#1E1E1E',
    color: '#eeeeee',
    padding: '20px',
  };

  const linkStyle = {
    display: 'block',
    color: '#eeeeee',
    textDecoration: 'none',
    margin: '10px 0',
  };

  return (
    <div style={sidebarStyle}>
      <h2>vaibhav.dev</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
