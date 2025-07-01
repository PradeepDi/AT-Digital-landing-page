import React from "react";
import "./App.css";
import { useState } from "react";
import logo from "./images/Logo.png";
import webAppImage from "./images/image 2.png";
import digitalStrategyImage from "./images/image 1.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle body overflow when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="AT Digital Logo" />
        </div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)}></div>}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => setMenuOpen(false)}>SERVICES</li>
          <li onClick={() => setMenuOpen(false)}>ABOUT US</li>
          <li onClick={() => setMenuOpen(false)}>CONTACT US</li>
          <li onClick={() => setMenuOpen(false)}>CAREERS</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
      </section>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className="btn-primary">GET FREE CONSULTATION</button>
        </div>
      </section>
      {/* Services Section */}
      <section className="services">
        <div className="service">
          <div className="service-image">
            <img src={webAppImage} alt="Web & Mobile App Development" />
          </div>
          <div className="service-content">
            <h2>Web & Mobile App Development</h2>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your business.
              We use frameworks which tailor content and engagement methods to
              respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="btn-secondary">LEARN MORE</button>
          </div>
        </div>
        <div className="service reverse">
          <div className="service-content">
            <h2>Digital Strategy Consulting</h2>
            <p>
              Your digital strategy should complement the overall marketing strategy
              of the company. In online marketing, each component will never work in
              isolation. We provide a clear concept and strategic overview to find the most efficient model for
              your business.
            </p>
            <button className="btn-secondary">LEARN MORE</button>
          </div>
          <div className="service-image">
            <img src={digitalStrategyImage} alt="Digital Strategy Consulting" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</summary>
          <p>Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio.Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio.</p>
        </details>
        <details>
          <summary>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</summary>
          <p>Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer. Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.</p>
        </details>
        <details>
          <summary>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</summary>
          <p>Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer. Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.Faucibus scelerisque nunc? Sapien massa morbi risus sagittis tortor integer.</p>
        </details>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="AT Digital Logo" />
            </div>
            <p className="footer-description">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>Our Technologies</h4>
              <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
