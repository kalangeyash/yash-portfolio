import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList/SkillList'
import htmlIcon from './../../assets/icons/HTML.svg'
import cssIcon from './../../assets/icons/CSS.svg'
import jsIcon from './../../assets/icons/JavaScript.svg'
import tsIcon from './../../assets/icons/TypeScript.svg'
import nodeIcon from './../../assets/icons/NodeJS-Light.svg'
import javaIcon from './../../assets/icons/Java-Light.svg'
import reactIcon from './../../assets/icons/React-Light.svg'
import nextIcon from './../../assets/icons/NextJS-Light.svg'
import expressIcon from './../../assets/icons/ExpressJS-Light.svg'
import gitIcon from './../../assets/icons/Git.svg'
import mongoIcon from './../../assets/icons/MongoDB.svg'
import tcssIcon from './../../assets/icons/TailwindCSS-Light.svg'
import prismaIcon from './../../assets/icons/Prisma.svg'
import psqlIcon from './../../assets/icons/PostgreSQL-Light.svg'
import postmanIcon from './../../assets/icons/Postman.svg'
import npmIcon from './../../assets/icons/Npm-Light.svg'
import sqlIcon from './../../assets/icons/MySQL-Light.svg'
import linuxIcon from './../../assets/icons/Linux-Light.svg'
import awsIcon from './../../assets/icons/AWS-Light.svg'
import azureIcon from './../../assets/icons/Azure-Light.svg'
import cloudflareIcon from './../../assets/icons/Cloudflare-Light.svg'
import discordIcon from './../../assets/icons/Discord.svg'
import dockerIcon from './../../assets/icons/Docker.svg'
import notionIcon from './../../assets/icons/Notion-Light.svg'
import vscodeIcon from './../../assets/icons/VSCode-Light.svg'


function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={javaIcon} skillName={"Java"}/>
        <SkillList src={htmlIcon} skillName={"HTML"}/>
        <SkillList src={cssIcon} skillName={"CSS"}/>
        <SkillList src={jsIcon} skillName={"JavaScript"}/>
        <SkillList src={tsIcon} skillName={"TypeScript"}/>
        <SkillList src={nodeIcon} skillName={"Node"}/>
      </div>
    <hr/>
    <div className={styles.skillList}>
    <SkillList src={reactIcon} skillName={"React"}/>
    <SkillList src={tcssIcon} skillName={"Tailwind CSS"}/>
    {/* <SkillList src={nextIcon} skillName={"NextJS"}/> */}
    </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={npmIcon} skillName={"NPM"}/>
        <SkillList src={expressIcon} skillName={"ExpressJS"}/>
        <SkillList src={mongoIcon} skillName={"MongoDB"}/>
        <SkillList src={sqlIcon} skillName={"SQL"}/>
        <SkillList src={psqlIcon} skillName={"PostgreSQL"}/>
        <SkillList src={prismaIcon} skillName={"Prisma"}/>
      </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={gitIcon} skillName={"Git"}/>
        {/* <SkillList src={awsIcon} skillName={"AWS"}/> */}
        <SkillList src={azureIcon} skillName={"Azure"}/>
        <SkillList src={cloudflareIcon} skillName={"Cloudflare"}/>
        <SkillList src={linuxIcon} skillName={"Linux"}/>
        <SkillList src={postmanIcon} skillName={"Postman"}/>
        {/* <SkillList src={dockerIcon} skillName={"Docker"}/> */}
        {/* <SkillList src={discordIcon} skillName={"Dicord"}/>
        <SkillList src={notionIcon} skillName={"Notion"}/>
        <SkillList src={vscodeIcon} skillName={"VS-Code"}/> */}
      </div>
      <hr/>
    </section>
  )
}

export default Skills
