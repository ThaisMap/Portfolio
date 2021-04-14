import React from 'react';
import styles from '../styles/cardProject.module.css';

export default function CardProject(props) {
  const { project } = props;
  return (
    <section className={styles.container}>
      <h3 className={`text text-large`}>{project.name}</h3>
      <img
        className={`padding-bottom ${styles.coverImg}`}
        src={`images/${project.images[0]}`}
        alt=''
      />

      <p className={`text`}> {project.description}</p>
      <p className={`text`}>Tecnologias: {project.technologies}</p>
    </section>
  );
}
