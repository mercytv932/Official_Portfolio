import { Download } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <span>Yosef Ergano</span>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" download>
          Resume <Download size={30} />{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
