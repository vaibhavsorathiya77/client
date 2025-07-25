import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
// import Sidebar from "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import "./App.css";
const App = () => {
  const isLargeScreen = window.innerWidth >= 1024;
  return (
    <Router>
      <Navbar />
      {/* <Sidebar/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      < Route path="/contact" element={<Contact/>} />

    </Routes>
    </Router>
 
  );
};

export default App;
