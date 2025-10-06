import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_about">
          <h3>Fashion Hub</h3>
          <p>
            Explore the latest fashion trends and shop your favorite styles with us.
          </p>
        </div>

        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#shop-section">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer_social">
          <h4>Follow Us</h4>
          <div className="social_icons">
            <a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook"/></a>
            <a href="#"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram"/></a>
            <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter"/></a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; 2025 Fashion Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
