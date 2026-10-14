function Navbar () {
  return (
    <nav className="navbar">
      <span>Yosef Ergano</span>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://www.linkedin.com/in/yosef-ergano-a694a7266/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Hire Me</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
