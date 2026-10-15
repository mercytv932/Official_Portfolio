import { Mail } from "lucide-react";
import yosefImage from "../assets/profile.pic.png";

function Hero() {
  return (
    <div className="heroContainer" id="home" aria-labelledby="hero-title">
      <div className="heroText">
        <h5 className="hero-greeting">Hello, I'm </h5>
        <h1 className="hero-title">Yosef Ergano</h1>
        <h2>Full-Stack Software Engineer</h2>
        <p>
          I build modern web applications using React, Node.js, and MongoDB. I
          enjoy solving real-world problems and turning ideas into functional,
          user-friendly products.
        </p>
        <a className="contact-btn" href="#contact">
          <Mail size={20} aria-hidden="true" />
        </a>
        <div className="heroBtns">
          <a
            className="github"
            href="https://github.com/mercytv932"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
          </a>

          <a
            className="LinkedIn"
            href="https://linkedin.com/in/yosefergano"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </a>

          <a
            className="email"
            href="mailto:yo.ergano@gmail.com"
            rel="noreferrer"
          >
            <Mail size={20} />
            yo.ergano@gmail.com
          </a>
        </div>
      </div>
      <div className="heroImage">
        <img src={yosefImage} alt="Yosef Ergano" />
      </div>
    </div>
  );
}

export default Hero;
