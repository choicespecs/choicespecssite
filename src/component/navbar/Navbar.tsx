import "./navbar.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="intro">
        <img
          src="https://choicespecs-website.s3.us-east-2.amazonaws.com/Choice+Specs+Logo.png"
          alt="Website Logo"
          className="logo-img"
        />
        <h1 className="logo-title">Choice Specs</h1>
        <img
          src="https://choicespecs-website.s3.us-east-2.amazonaws.com/choiceSpecs-transparent.png"
          alt="Website Logo"
          className="logo-transparent"
        />
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <span className="long-word">About Me</span>
            <span className="short-word">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
            <span className="long-word">My Experience</span>
            <span className="short-word">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            <span className="long-word">My Work</span>
            <span className="short-word">Portfolio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <span className="long-word">Contact Me</span>
            <span className="short-word">Contact</span>
          </Link>
        </li>
      </ul>

      <div className="social-media-wrapper">
        <span>Follow me on</span>
        <div className="social-media">
          <a href="https://github.com/christophermlee2" className="sm-link">
            <img
              src="https://choicespecs-website.s3.us-east-2.amazonaws.com/github.png"
              alt="My Github Link"
              style={{ height: "41px", width: "41px" }}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYeqFikajvHjnxEV1bNW6iA"
            className="sm-link"
          >
            <img
              src="https://choicespecs-website.s3.us-east-2.amazonaws.com/youtubelogo.png"
              alt="My Youtube Link"
              style={{ height: "41px", width: "41px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christophermlee2"
            className="sm-link"
          >
            <img
              src="https://choicespecs-website.s3.us-east-2.amazonaws.com/linkedin.png"
              alt="My Linkedin Link"
            />
          </a>
        </div>
      </div>

      <div className="copyright-notice">
        <p>Copyright &copy; 2021. All rights reserved.</p>
      </div>
    </nav>
  );
}
