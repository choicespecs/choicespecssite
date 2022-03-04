import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-card">
        <h2>Greetings,</h2>
        <p>My work is available through these links below</p>
        <a href="https://github.com/christophermlee2">
          Check out my Code / Programming
        </a>
        <a href="https://www.youtube.com/channel/UCYeqFikajvHjnxEV1bNW6iA">
          Check out my YouTube / Videos
        </a>
        <a href="https://www.linkedin.com/in/christophermlee2">
          Check out my LinkedIn
        </a>
      </div>
    </section>
  );
}
