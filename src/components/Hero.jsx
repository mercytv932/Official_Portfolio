import { Mail } from "lucide-react";
import yosefImage from "../assets/profile.pic.png";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h5>Hello, I'm </h5>
        <h1>Yosef Ergano</h1>
        <h2>Aspiring Full-Stack Software Engineer</h2>
        <p>
          I build modern web applications using React, Node.js, and MongoDB. I
          enjoy solving real-world problems and turning ideas into functional,
          user-friendly products.
        </p>
        <a href="#contact">
          {" "}
          <Mail size={30} /> Contact Me
        </a>
        <div className="heroBtns">
          <a href="">Github</a>
          <a href="">Linkedln</a>
          <a href="">
            <Mail size={30} />
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
