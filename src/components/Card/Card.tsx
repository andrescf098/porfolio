import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
interface elements {
  projects: Project[];
}

export const Card: React.FC<elements> = ({ projects }) => {
  return (
    <section className={styles._container}>
      {projects?.map((project, index) => (
        <article key={index} className={styles._card}>
          <Image
            src={project.img}
            width={340}
            height={180}
            alt={project.title}
            quality={85}
          />
          <div className={styles._content}>
            <h2>{project.title}</h2>
            <span>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </span>
            <p className={styles._description}>{project.description}</p>
            <span className={styles._links}>
              <Link href={project.urlGithub}>
                Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <Link href={project.url}>
                Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </span>
          </div>
        </article>
      ))}
    </section>
  );
};
