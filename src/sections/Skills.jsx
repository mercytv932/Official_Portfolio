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
  return (
    <div>
      <h3>Skills</h3>
      <div className="skill-item">
        <img src={html5Icon} alt="" />
        <span>HTML5</span>
      </div>
      <div className="skill-item">
        <img src={css3Icon} alt="" />
        <span>CSS3</span>
      </div>

      <div className="skill-item">
        <img src={JavaScriptIcon} alt="" />
        <span>JavaScript</span>
      </div>
      <div className="skill-item">
        <img src={TypeScriptIcon} alt="" />
        <span>TypeScript</span>
      </div>

      <div className="skill-item">
        <img src={ReactIcon} alt="" />
        <span>React</span>
      </div>

      <div className="skill-item">
        <img src={NodejsIcon} alt="" />
        <span>Node.js</span>
      </div>

      <div className="skill-item">
        <img src={ExpressIcon} alt="" />
        <span>Express</span>
      </div>
      <div className="skill-item">
        <img src={MongoDBIcon} alt="" />
        <span>MongoDB</span>
      </div>
      <div className="skill-item">
        <img src={GitIcon} alt="" />
        <span>Git</span>
      </div>
      <div className="skill-item">
        <img src={GitHubIcon} alt="" />
        <span>GitHub</span>
      </div>
      <div className="skill-item">
        <img src={PostmanIcon} alt="" />
        <span>Postman</span>
      </div>
      <div className="skill-item">
        <img src={TailwindCSSIcon} alt="" />
        <span>Tailwind CSS</span>
      </div>
    </div>
  );
}

export default Skills;
