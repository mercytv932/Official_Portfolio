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
      </main>
      <Contact />
    </div>
  );
}

export default App;
