'use client';
import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <a href='#home'>Home</a>
            <a href='#about'>About me</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
