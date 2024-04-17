import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Copyright 2024 - Made by Andrés Cifuentes</p>
      <div className={styles.footer__social}>
        <span>
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
    </footer>
  );
};
