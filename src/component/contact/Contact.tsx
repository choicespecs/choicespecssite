import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading-group">
          <span className="section-head-small">Contact Me</span>
          <h5 className="section-head-large">Let's work together</h5>
        </div>

        <div className="contact-info-wrapper">
          <form
            action="https://formspree.io/f/myylnqlg"
            className="contact-form"
            method="POST"
            id="my-form"
          >
            <input
              type="text"
              className="input"
              placeholder="Full name"
              name="name"
              required
            />
            <input
              type="email"
              className="input"
              placeholder="Email address"
              name="email"
              required
            />
            <textarea
              rows={7}
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button className="btn btn-blue" type="submit">
              Send Message
            </button>
          </form>
          <div id="my-form-status"></div>
        </div>
      </div>
    </section>
  );
}
