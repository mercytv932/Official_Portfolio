import { Download } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar" arial-label="Main navigation">
      <a className="navbar-brand" href="#home">
        Yosef Ergano
      </a>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" download="Yosef_Ergano_Resume.pdf">
          Resume <Download size={18} aria-hidden="true" />{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
