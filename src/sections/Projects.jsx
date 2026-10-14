function Projects() {
  return (
    <div className="projectsContainer" id="projects">
      <h1>My Projects</h1>

      <div className="projectsGrid">
        <div className="projectCard">
          <h3>Expense Tracker</h3>
          <p>
            {" "}
            An expense tracker built with JavaScript, HTML, CSS, and etc. Users
            can add expenses, organize them by category, filter by type, and
            view a live running total.
          </p>
          <a href="https://github.com/mercytv932/Expense-Tracker">
            View on GitHub
          </a>
        </div>

        <div className="projectCard">
          <h3>Job Application Tracker</h3>
          <p>
            {" "}
            Built a job application tracking system using HTML, CSS, and
            JavaScript. Features include application management, search and
            filtering, status updates, dynamic dashboard statistics, and an
            interactive user interface.
          </p>
          <a href="https://github.com/mercytv932/Job-Application-Tracker">
            View on GitHub
          </a>
        </div>

        <div className="projectCard">
          <h3>Notes App</h3>
          <p>
            Built a notes application with full CRUD functionality using
            JavaScript and localStorage, allowing users to create, edit, delete,
            and persist notes.
          </p>
          <a href="https://github.com/mercytv932/Notes_App">View on GitHub</a>
        </div>

        <div className="projectCard">
          {" "}
          <h3>Movie Search App</h3>
          <p>
            A movie search app built with HTML, CSS, and JavaScript. Users can
            search for movies, view movie details, and browse results using data
            from a movie API.
          </p>
          <a href="https://github.com/mercytv932/Movie-Search">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
