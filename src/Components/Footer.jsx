import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            I am a passionate developer focused on building clean and efficient web applications.
            Always eager to learn and collaborate on exciting projects.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Connect</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: Rajkishorec39@gmail.com</p>
          <p>Phone: +916205938988</p>
          <p>Location:Ahemdabad, Gujrat</p>
        </div>

        <div className="footer-section social">
          <h3>Social</h3>
          <div className="social-icons">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-kishor-595a082a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/6205938988/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Raj Kishor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
