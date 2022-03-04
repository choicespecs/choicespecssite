import React from "react";
import "./frontendcontent.css";

export default function FrontEndContent() {
  return (
    <div className="skills-content">
      <div className="front-end-content">
        <div className="front-end-content-title">
          <h2>Front End Development</h2>
          <p>Experience in:</p>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>HTML | CSS</li>
          </ul>
        </div>
        <div className="front-end-content-info">
          <div className="front-end-card">
            <div className="front-end-content-bg">
              <div className="front-end-card-title">Responsive Design</div>
              <p className="front-end-content-body">
                Focused on development for multiple devices with a heavy
                approach to developing interactive, interesting, and responsive
                web applications and websites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
