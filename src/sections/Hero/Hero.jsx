import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Sanjam"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sanjam
          <br />
          Singh
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://github.com/SanjamSinghKalsi" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          {/* <a href="https://github.com/SanjamSinghKalsi" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/sanjam-singh-kalsi-a91aa01a0/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="linkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React and Spring-Boot web apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
