import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Copyright 2024 - Made by Andrés Cifuentes</p>
      <div className={styles.footer__social}>
        <Link href='https://www.linkedin.com/in/andr%C3%A9s-cifuentes-castro-513b74306/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href='https://github.com/andrescf098'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </footer>
  );
};
