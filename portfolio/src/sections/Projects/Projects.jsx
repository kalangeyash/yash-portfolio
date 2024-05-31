import React from "react";
import styles from "./ProjectsStyles.module.css";
import Project1 from "./../../assets/Project 1.png";
import Project2 from "./../../assets/zerodha clone.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Project1}
          link="https://github.com/kalangeyash/Todo-App"
          projectname="Todo App"
          description="Let's you create, modify and delete todos"
        />
        <ProjectCard
          src={Project2}
          link="https://github.com/kalangeyash/Zerodha-clone"
          projectname="Zerodha UI Landing Page"
          description="Landing Page of "
        />
      </div>
    </section>
  );
}

export default Projects;