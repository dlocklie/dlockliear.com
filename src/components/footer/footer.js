import React from "react";
import "./footer.css";
import facebookLogo from "../../images/facebook.svg";
import instagramLogo from "../../images/instagram.svg";
import twitterLogo from "../../images/twitter.svg";
import githubLogo from "../../images/github.svg";

const Footer = () => (
  <footer>
    
    <div className="footer-container">
      <div className="social-container">
        <div className="social-media-links">
          <img
            src={facebookLogo}
            alt="facebook logo icon"
            onClick={() => window.open("https://www.facebook.com/drew.lockliear", "_blank")}
            className="social-media-logo"
            fill="#fff">
          </img>
          <img 
            src={instagramLogo}
            alt="instagram logo icon"
            onClick={() => window.open("https://www.instagram.com/d.lockli/", "_blank")} 
            className="social-media-logo">
          </img>
          <img 
            src={twitterLogo}
            alt="twitter logo icon"
            onClick={() => window.open("https://twitter.com/d_lockli", "_blank")}
            className="social-media-logo">
          </img>
          <img 
            src={githubLogo}
            alt="github logo icon"
            onClick={() => window.open("https://github.com/dlocklie", "_blank")}
            className="social-media-logo">
          </img>
        </div>
      </div>
      <p className="footer-center">
        © {new Date().getFullYear()} Drew Lockliear. All rights reserved.
      </p>
      <p className="footer-center">
        Built with <a href="https://www.gatsbyjs.org" target="_blank" className="gatsby-link">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer