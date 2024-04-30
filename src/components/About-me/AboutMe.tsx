'use client';
import React, { useState } from 'react';
import styles from './AboutMe.module.css';
import { HorizontalWrapper } from '../HorizontalWrapper';

export const AboutMe = () => {
  const [showMySkills, setShowMySkills] = useState<boolean>(true);
  const [showTraining, setShowTraining] = useState<boolean>(false);
  const handlerSwapSkills = (): void => {
    setShowMySkills(true);
    setShowTraining(false);
  };
  const handlerSwapTraining = (): void => {
    setShowMySkills(false);
    setShowTraining(true);
  };
  return (
    <section id='about' className={styles.about}>
      <article className={styles._container}>
        <HorizontalWrapper>
          <p className={styles._title}>ABOUT ME</p>
          <section className={styles._content}>
            <div className={styles._information}>
              <p className={styles._description}>
                My name is Andrés Cifuentes, a mechanical engineer who, due to
                my enormous curiosity about the world of technology and facing
                new challenges during my years as an engineering student,
                discovered the world of programming and, in turn, the world of
                web development. I have knowledge in full-stack development
                (HTML, CSS, React, next.js, node.js, SQL, among others) and
                certified studies by the Universidad Distrital Francisco José de
                Caldas and Platzi in Full-Stack Web Development.
              </p>
            </div>
            <div className={styles._tooltip}>
              <div className={styles._selection}>
                <button
                  className={
                    !showMySkills ? styles._button : styles._button_active
                  }
                  onClick={() => handlerSwapSkills()}
                >
                  MY SKILLS
                </button>
                <button
                  className={
                    !showTraining ? styles._button : styles._button_active
                  }
                  onClick={() => handlerSwapTraining()}
                >
                  TRAINING
                </button>
              </div>
              {showMySkills ? (
                <article className={styles._habilities}>
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
              ) : (
                <article className={styles._training}>
                  <span>
                    <p>Web Developer</p>
                    <p>
                      Universidad Distrital Francisco José de Caldas Full-Stack
                      Developer - Intermediate 2023
                    </p>
                  </span>
                  <span>
                    <p>PLATZI</p>
                    <p>Full-Stack Developer with Javascript 2023</p>
                  </span>
                  <span>
                    <p>PLATZI</p>
                    <p>Frontend with Javascript 2024</p>
                  </span>
                  <span>
                    <p>PLATZI</p>
                    <p>HTML & CSS 2024</p>
                  </span>
                </article>
              )}
            </div>
          </section>
        </HorizontalWrapper>
      </article>
    </section>
  );
};
