import React from "react";
import styles from "./Projects.module.css";
import { Card } from "../Card";
import { HorizontalWrapper } from "../HorizontalWrapper";
import { elements } from "../../data/porfolio-data.js"

export const Projects = () => {
  const projects: Projects[] = elements;
  return (
    <section id="projects" className={styles.projects}>
      <HorizontalWrapper>
        <p className={styles.project__title}>PROJECTS</p>
        <Card projects={projects} />
      </HorizontalWrapper>
    </section>
  );
};
