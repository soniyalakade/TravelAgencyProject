import React from "react";
import logo from "../assets/logo.png";   // ✅ IMPORT IMAGE
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left side: Logo */}
      <div className="nav-left">
        <img src={logo} alt="TravelGo Logo" className="logo-img" />
        <h1 className="logo-text">TravelGo</h1>
      </div>

      {/* Right side: Links */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/packages">Packages</a>
        <Link to="/contact">Contact</Link>

      </nav>
    </header>
  );
};

export default Navbar;
