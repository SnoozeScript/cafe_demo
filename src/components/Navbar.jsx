import React, { useState, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = ["best-sellers", "happy-customers", "reels", "aboutus"];

  const customStyles = `
    .navbar {
      transition: all 0.3s ease;
      background: linear-gradient(135deg, var(--coffee-dark), var(--coffee-medium), var(--coffee-dark));
      background-size: 200% 200%;
      animation: gradientAnimation 10s ease infinite;
      padding: 1rem 0;
    }
    
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    .navbar.scrolled {
      padding: 0.5rem 0;
      background-color: rgba(26, 15, 7, 0.95);
      backdrop-filter: blur(10px);
    }
    
    .navbar-brand {
      color: var(--coffee-cream) !important;
      font-weight: 700;
      font-size: 1.5rem;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
    }
    
    .navbar-brand:hover {
      color: var(--coffee-light) !important;
    }
    
    .navbar-brand svg {
      margin-right: 0.5rem;
      color: var(--coffee-light);
    }
    
    .nav-link {
      color: var(--coffee-cream) !important;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 1rem !important;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .nav-link:hover {
      color: var(--coffee-light) !important;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--coffee-light);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .navbar-toggler {
      border-color: var(--coffee-cream) !important;
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(245, 230, 211, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    }
    
    @media (max-width: 768px) {
      .navbar {
        padding: 0.5rem 0;
      }
      
      .nav-link::after {
        display: none;
      }
      
      .navbar-collapse {
        background-color: rgba(26, 15, 7, 0.95);
        padding: 1rem;
        border-radius: 10px;
        margin-top: 0.5rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand">
            <FaCoffee />
            <span>Coffee Haven</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <button
                    className="nav-link border-0 bg-transparent"
                    onClick={() => scrollToSection(item)}
                  >
                    {item.replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;