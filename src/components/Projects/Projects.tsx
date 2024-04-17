import React from 'react';
import styles from './Projects.module.css';
import { Card } from '../Card';
import imageBlog from '../../../public/blog.jpg';
import imageParking from '../../../public/Parking.png';
import imageShopi from '../../../public/Shopi.png';
import imageSocialNetwork from '../../../public/SocialNetwork.png';
import { HorizontalWrapper } from '../HorizontalWrapper';

export const Projects = () => {
  const elemtens: Project[] = [
    {
      title: 'Parking lot manager',
      description:
        'App to manage the entry and exit of vehicles from a parking lot',
      img: imageParking,
      urlGithub: '',
      url: 'https://admin-parqueadero-frontend.vercel.app/home',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
    },
    {
      title: 'Personal blog',
      description:
        'Create a user, modify your profile and share your experiences or general knowledge',
      img: imageBlog,
      urlGithub: 'https://github.com/andrescf098/project-blog',
      url: 'https://blog-frontend-self-kappa.vercel.app',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'SocialReact',
      description:
        'A Social Network. Create a user, follow different people, share photos or statuses and comment on those you follow',
      img: imageSocialNetwork,
      urlGithub: '',
      url: '',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Virtual shopping store',
      description:
        'Virtual store to search and buy products from different categories, add products to your shopping cart and create your order',
      img: imageShopi,
      urlGithub: '',
      url: '',
      technologies: ['React', 'TailwindCSS', 'Express.js', 'PostgreSQL'],
    },
  ];
  return (
    <section id='projects' className={styles.projects}>
      <article className={styles.projects__container}>
        <HorizontalWrapper>
          <p className={styles.project__title}>PROJECTS</p>
          <section className={styles.cards__container}>
            <div className={styles.projects__cards}>
              <Card projects={elemtens} />
            </div>
          </section>
        </HorizontalWrapper>
      </article>
    </section>
  );
};
