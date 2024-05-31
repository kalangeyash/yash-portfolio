import React from 'react'
import styles from './../sections/Projects/ProjectsStyles.module.css'

function ProjectCard({ src, link ,projectname,description}) {
  return (
    <div>
      <a href={link} target='blank'>
            <img className={styles.projectContainer} src={src} alt={projectname}/>
            <h3>{projectname}</h3>
            <p>{description}</p>
        </a>
    </div>
  )
}

export default ProjectCard
