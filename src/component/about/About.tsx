import "./about.css";
import React, { useEffect } from "react";
import { init } from "ityped";
import { Link } from "react-router-dom";

type AboutProps = {
  recentPost: string;
};

declare namespace JSX {
  interface IntrinsicElements {
    AboutProps: {
      recentPost: string;
    };
  }
}

export default function About(props: AboutProps) {
  const textRef = React.useRef() as React.MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full Stack Developer",
        "Software Developer",
        "Web Designer",
        "UX | UI Designer",
      ],
    });
  }, []);

  return (
    <section className="about">
      <div className="container">
        <div className="about-me-intro">
          <div className="intro-description">
            <p>
              <span>Hello, my name is Chris.</span>
            </p>
            <div className="heading-group">
              <h5 className="section-head-large">
                <span ref={textRef}></span>
              </h5>
            </div>
            <p>
              I am always looking to grow and improve from others as a
              developer. I have experience in front-end, back-end, website, and
              web app development with a passion for designing and creating web
              applications.
            </p>
            <div className="button-mobile">
              <Link to="/contact" className="btn cta-btn contact">
                Contact
              </Link>
              <Link to="/skills" className="btn cta-btn">
                Resume
              </Link>
            </div>
            <div className="call-to-action desktop">
              <p>
                I am always seeking new opportunities to both grow and learn as
                a developer. You can definitely explore my portfolio and page to
                see if they may match with what you are looking for. Feel free
                to reach out!
              </p>
              <Link to="/contact" className="btn cta-btn contact">
                Contact Me
              </Link>
              <Link to="/skills" className="btn cta-btn">
                Resume
              </Link>
            </div>
          </div>
          <div className="intro-picture">
            <a href="https://www.instagram.com/topherleeee/">
              <img
                src={props.recentPost}
                alt="my most recent post on instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
