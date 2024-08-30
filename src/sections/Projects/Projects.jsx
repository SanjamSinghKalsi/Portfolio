import styles from "./ProjectsStyles.module.css";
import trivia from "../../assets/Trivia.png";
import todayILearned from "../../assets/API.png";
import kalsify from "../../assets/kalsify.jpg";
import quiz from "../../assets/quizz.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={trivia}
          link={"https://www.springworks.in/trivia/"}
          h3="Trivia"
          p="Collaboration Application"
        />
        <ProjectCard
          src={todayILearned}
          link={"https://todayilearned-sanjam.netlify.app/"}
          h3="Today I Learned"
          p="Fact Sharing Application"
        />
        <ProjectCard
          src={kalsify}
          link={
            "https://kalsify-sanjam-172212.netlify.app/#664c8f193e7aa067e94e88fe"
          }
          h3="Kalsify"
          p="Recipe Fetching Application"
        />
        <ProjectCard
          src={quiz}
          link={"https://react-quiz-by-sanjam.netlify.app/"}
          h3="Quiz"
          p="Test your Knowledge!"
        />
      </div>
    </section>
  );
}

export default Projects;
