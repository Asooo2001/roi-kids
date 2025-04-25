import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    if (!window.location.hash.includes("#/")) {
      window.location.hash = `#/#${id}`;
    } else {
      scrollToSection(id);
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="ROI Kids Logo" />
            </Link>
          </div>

          <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>
                Ballina
              </Link>
            </li>
            <li>
              <a href="#ekipi-yne" onClick={(e) => handleSectionClick(e, "ekipi-yne")}>
                Ekipi ynë
              </a>
            </li>
            <li>
              <a href="#profesoret-tane" onClick={(e) => handleSectionClick(e, "profesoret-tane")}>
                Ligjëruesit
              </a>
            </li>
            <li>
              <a href="#rreth-nesh" onClick={(e) => handleSectionClick(e, "rreth-nesh")}>
                Rreth nesh
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                Trajnimet <i className="arrow-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Mobile App Development</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
                <li>
                  <a href="#">AI & Machine Learning</a>
                </li>
                <li>
                  <a href="#">Virtual Reality</a>
                </li>
                <li>
                  <a href="#">Data Science & Analytics</a>
                </li>
                <li>
                  <a href="#">3D Modeling & Animation</a>
                </li>
                <li>
                  <a href="#">Robotics & Electronics</a>
                </li>
                <li>
                  <a href="#">Cyber Security</a>
                </li>
                <li>
                  <a href="#">Game Development</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Coding & Programming</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>
                Na kontaktoni
              </Link>
            </li>
          </ul>

          <div className="apply-button">
            <Link to="/contact" className="btn-apply">
              APLIKO TANI →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
