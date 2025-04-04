"use client";
import styles from "./AboutMe.module.css";
import { HorizontalWrapper } from "../HorizontalWrapper";

export const AboutMe = () => {
  return (
    <section id="about" className={styles.about}>
      <HorizontalWrapper>
        <article className={styles._container}>
          <section className={styles._content}>
            <p className={styles._title}>ABOUT ME</p>
            <p className={styles._description}>
              My name is <strong>Andrés Cifuentes</strong>, a{" "}
              <strong>mechanical engineer</strong> who, due to my enormous{" "}
              <strong>curiosity</strong> about the world of{" "}
              <strong>technology</strong> and facing new{" "}
              <strong>challenges</strong> during my years as an{" "}
              <strong>engineering student</strong>, discovered the world of{" "}
              <strong>programming</strong> and, in turn, the world of{" "}
              <strong>web development</strong>. I have knowledge in{" "}
              <strong>full-stack development</strong> (<strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>React</strong>,{" "}
              <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>SQL</strong>, among others) and{" "}
              <strong>certified studies</strong> by the{" "}
              <strong>Universidad Distrital Francisco José de Caldas</strong>{" "}
              and <strong>Platzi</strong> in{" "}
              <strong>Full-Stack Web Development</strong>.
            </p>
          </section>
          <section>
            <p className={styles._titleSkills}>Skills</p>
            <div className={styles._tooltip}></div>
            <article className={styles._skills}>
              <span>HTLM</span>
              <span>CSS</span>
              <span>TailwindCSS</span>
              <span>Javascript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>SQL</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>Git</span>
            </article>
          </section>
          <section>
            <p className={styles._titleSkills}>Soft Skills</p>
            <div className={styles._tooltip}></div>
            <article className={styles._softSkills}>
              <span>Effective Communication</span>
              <span>Teamwork</span>
              <span>Problem solving</span>
              <span>Time Management</span>
              <span>Critical Thinking</span>
              <span>Continuos learning</span>
            </article>
          </section>
        </article>
      </HorizontalWrapper>
    </section>
  );
};
