import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // This function runs when the hamburger is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="title">
        SDSU Parking Locator
      </Link>

      {/* Hamburger button with onClick */}
      <button
        className="hamburger"
        onClick={toggleMenu}      // <-- THIS is the click handler
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Nav links, show/hide based on isOpen */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
