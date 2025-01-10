import React from "react";
import styles from "./ProjectsStyles.module.css";
import Project1 from "./../../assets/Project 1.png";
import Project2 from "./../../assets/zerodha clone.png"
import Project3 from '../../assets/Bank.png'
import Project4 from '../../assets/pp.png'
import Project5 from '../../assets/zx.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>


      <ProjectCard
        src ={Project5}
        link="https://zap-x.vercel.app/"
        projectname= "ZapX"
        description="Metaverse Game Landing Page using React ,Tailwind and GSAP"
      />
      <ProjectCard
        src ={Project4}
        link="https://pencil-path-henna.vercel.app/"
        projectname= "Pencil Path"
        description="Blogging Appplication using Hono Cloudflare Workers and Postgres  "
      />
      <ProjectCard
        src ={Project3}
        link="https://sentinal-bank-6ku5.vercel.app/"
        projectname= "Sentinal Bank"
        description="Banking website with transactions using MERN"
      />
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
          description="Landing Page of Zerodha using HTML CSS"
        />
      </div>
    </section>
  );
}

export default Projects;
