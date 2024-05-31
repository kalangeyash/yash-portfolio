import React from 'react'
import styles from './../../sections/Skills/SkillsStyles.module.css'

function SkillList({src , skillName }) {
  return (
    
        <span>
            <img src = {src} alt={`$skillName _icon`}/>
            <p className={styles.paragraph}>{skillName}</p>
        </span>
   
  )
}

export default SkillList
