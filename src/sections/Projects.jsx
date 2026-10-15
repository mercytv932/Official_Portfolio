import ProjectCard from "../components/ProjectCard";

import movieSearchApp from "../assets/movies.png";
import expenseTracker from "../assets/expenseTracker.png";
import projectManagement from "../assets/projectManagement.png";
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          image={projectManagement}
          title="TaskFlow — Project Management App"
          description="Built a project management app that helps users organize projects, manage tasks, track progress, and 
          stay on top of their work through a centralized dashboard."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          liveUrl="https://pro-tasker-frontend-2tg4.onrender.com/login"
          githubUrl="https://github.com/mercytv932/Pro_Tasker"
        />

        <ProjectCard
          image={movieSearchApp}
          title="Movie Search App"
          description="Built a movie search app that uses a REST API to let users discover movies 
          and explore movie details through a simple, user-friendly interface."
          technologies={["Html5", "Css3", "JavaScript"]}
          liveUrl="https://movie-search-app-cevc.onrender.com/"
          githubUrl="https://github.com/mercytv932/Movie-Search"
        />

        <ProjectCard
          image={expenseTracker}
          title="Expense Tracker"
          description="Developed an expense tracker that helps users record expenses, monitor
           spending, and manage their finances with an organized, easy-to-use interface."
          technologies={["Html5", "Css3", "JavaScript"]}
          liveUrl="https://expense-tracker-app-r4h5.onrender.com/"
          githubUrl="https://github.com/mercytv932/Expense-Tracker"
        />
      </div>
    </section>
  );
}

export default Projects;
