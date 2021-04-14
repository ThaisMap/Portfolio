import React from "react";
import styles from "../styles/cardProject.module.css";

export default function CardProject(props) {
  const { project } = props;
  return (
    <section className={styles.container}>
      <h3 className={`text text-large`}>{project.name}</h3>
      <img
        className={styles.coverImg}
        src={`images/${project.images[0]}`}
        alt={`miniatura ${project.name}`}
      />
      <p className={`text text-small ` + styles.textCenter}>
        {project.description}
      </p>
      <strong className={`text ` + styles.textCenter}>
        Tecnologias: {project.technologies}
      </strong>
    </section>
  );
}
