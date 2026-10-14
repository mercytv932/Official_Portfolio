import yosefImage from "../assets/profile.pic.png";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h5>Hello, I'm </h5>
        <h1>Yosef Ergano</h1>
        <h2>Aspiring Full-Stack Software Engineer</h2>
        <p>
          I build modern web applications using JavaScript, React, and Node.js,
          focused on solving real-world problems.
        </p>
        <div className="heroBtns">
          <button>View My Work</button>
          <button>Contact Me</button>
        </div>
      </div>
      <div className="heroImage">
        <img src={yosefImage} alt="Yosef Ergano" />
      </div>
    </div>
  );
}

export default Hero;
