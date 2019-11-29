import { Link } from "gatsby";
import React from "react";
import "./footer.css";
import facebookLogo from "../../images/facebook.svg";
import instagramLogo from "../../images/instagram.svg";
import twitterLogo from "../../images/twitter.svg";
import githubLogo from "../../images/github.svg";

const Footer = () => (
  <footer>
    
    <div className="footer-container">
      <div className="social-media-links">
        <img 
          src={facebookLogo} 
          className="social-media-logo">
        </img>
        <img 
          src={instagramLogo} 
          className="social-media-logo">
        </img>
        <img 
          src={twitterLogo} 
          className="social-media-logo">
        </img>
        <img 
          src={githubLogo} 
          className="social-media-logo">
        </img>
        
      </div>
      <p className="footer-center">
        © {new Date().getFullYear()}, Developed by Drew Lockliear
      </p>
      <p className="footer-center">
        Built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer