import html5Icon from "../assets/skills-icons/HTML5.svg";
import css3Icon from "../assets/skills-icons/CSS3.svg";
import JavaScriptIcon from "../assets/skills-icons/JavaScript.svg";
import TypeScriptIcon from "../assets/skills-icons/TypeScript.svg";
import ReactIcon from "../assets/skills-icons/React.svg";
import NodejsIcon from "../assets/skills-icons/Node.js.svg";
import ExpressIcon from "../assets/skills-icons/Express.svg";
import MongoDBIcon from "../assets/skills-icons/MongoDB.svg";
import GitIcon from "../assets/skills-icons/Git.svg";
import GitHubIcon from "../assets/skills-icons/GitHub.svg";
import PostmanIcon from "../assets/skills-icons/Postman.svg";
import TailwindCSSIcon from "../assets/skills-icons/Tailwind CSS.svg";

function Skills() {
  const skills = [
    { name: "HTML5", icon: html5Icon },
    { name: "CSS3", icon: css3Icon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: NodejsIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Tailwind CSS", icon: TailwindCSSIcon },
  ];
  return (
    <section className="skills" id="skills">
      <p>SkILLS & TECH STACK</p>
      <h3>Technologies I work with:</h3>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.icon} alt="" aria-hidden="true" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
