import React from "react";
import styles from "./HeroStyles.module.css";
import myImg from "../../assets/my_img.png";
import sun from "../../assets/LightMode.png";
import moon from "../../assets/DarkMode.png";
import twitterIconlight from "../../assets/icons/examples/twitter-light.svg";
import githubIconlight from "../../assets/icons/examples/github-light.svg";
import linkedinIconlight from "../../assets/icons/examples/linkedin-light.svg";
import twitterIcondark from "../../assets/icons/examples/twitter-dark.svg";
import githubIcondark from "../../assets/icons/examples/github-dark.svg";
import linkedinIcondark from "../../assets/icons/examples/linkedin-dark.svg";
import CV from '../../assets/YashKalange_CV.pdf'
import { ThemeProvider, useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterIconlight : twitterIcondark;
    const githubIcon = theme === 'light' ? githubIconlight : githubIcondark;
    const linkedinIcon = theme === 'light' ? linkedinIconlight : linkedinIcondark;
    

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.colorMode}  src={themeIcon} alt="screen_mode" onClick={toggleTheme} />
        <img className={styles.hero} src={myImg} alt="my_img" />
      </div>

      <div className={styles.info}>
        <h1>
          Yash <br></br> Kalange
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://x.com/yash_kalange" target="blank">
            <img src={twitterIcon} alt="twitter_icon" />
          </a>
          <a href="https://github.com/kalangeyash" target="blank">
            <img src={githubIcon} alt="git_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-kalange-1a7014270/"
            target="blank"
          >
            <img src={linkedinIcon} alt="linkedin_icon" />
          </a>
        </span>
        <p className={styles.description}>
          Focused on continuous learning and improvement, which aim to drive both
          user satisfaction and success through effective web solutions
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
