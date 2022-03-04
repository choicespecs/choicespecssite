import React from "react";
import "./uxcontent.css";

export default function UXContent() {
  return (
    <div className="skills-content">
      <div className="ux-content">
        <div className="ux-content-left">
          <h2>UX | UI Design</h2>
          <p>Familiar with:</p>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
            <li>Powerpoint</li>
          </ul>
        </div>
        <div className="ux-info">
          <div className="ux-card">
            <div className="ux-card-content">
              <div className="ux-card-content-title"> User Centered Design</div>
              <p className="ux-card-content-body">
                Approach to design incorporating the user in mind throughout all
                stages of design. Preliminary Design to Prototype and eventually
                to development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
