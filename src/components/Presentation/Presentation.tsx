"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Presentation.module.css";
import Link from "next/link";
import { Welcome } from "../icons/Welcome";

export const Presentation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <section id="home" className={styles.home}>
      <div className={styles._border}></div>
      <article className={styles._article}>
        <p className={styles._title}>
          <Welcome />
        </p>
        <div className={styles._subtitle}>
          <p className={styles._presentation}>I&apos;M ANDRÉS CIFUENTES</p>
          <div className={styles._separator}></div>
          <div className={styles._description}>
            <p>I&apos;m full-stack web developer based in Colombia</p>
            <span>
              <Link href="https://www.linkedin.com/in/andr%C3%A9s-cifuentes-castro-513b74306/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="https://github.com/andrescf098">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1Fa9EiAyTjTdJ8CFuuzRgTjzoon4U0tfO/view?usp=sharing"
                className={styles._button}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                CV
              </Link>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};
