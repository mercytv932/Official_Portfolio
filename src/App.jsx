import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <div className="about-and-skills">
          <About />
          <Skills />
        </div>
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Yosef Ergano.</p>
      </footer>
    </div>
  );
}

export default App;
