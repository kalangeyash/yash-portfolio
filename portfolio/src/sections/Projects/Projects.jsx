import React from "react";
import styles from "./ProjectsStyles.module.css";
import Project1 from "./../../assets/Project 1.png";
import Project2 from "./../../assets/zerodha clone.png"
import Project3 from '../../assets/Bank.png'
import Project4 from '../../assets/pp.png'
import Project5 from '../../assets/zx.png'
import Project6 from '../../assets/devscanvas.png'
import Project7 from '../../assets/AIPlanner.avif'

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>


      <ProjectCard
        src ={Project7}
        link="https://project-planner-ten-mu.vercel.app/"
        projectname= "AI-Based Software Application Planner"
        description="A powerful web-based platform that helps developers plan their software projects using artificial intelligence. Generate comprehensive project plans, architecture diagrams, and detailed insights with ease."
      />
      <ProjectCard
        src ={Project6}
        link="https://devs-canvas.vercel.app/"
        projectname= "DevsCanvas"
        description="DevsCanvas is a Collabrative Online Code Editor. Uses TypeScript, ExpressJS, ReactJS and Socket.io"
      />
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
