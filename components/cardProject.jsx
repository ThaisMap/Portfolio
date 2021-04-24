import React from "react";
import styles from "../styles/cardProject.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CardProject(props) {
  const { project } = props;
  return (
    <section className={styles.container}>
      <h3 className={`text text-large`}>{project.name}</h3>
      <Link href={`/${project.page}`}>
        <Image
          className={styles.coverImg}
          src={`/images/${project.images[0]}`}
          alt={`miniatura ${project.name}`}
          height={250}
          width={350}
        />
      </Link>
      <strong className={`text ` + styles.textCenter}>
        Tecnologias: {project.technologies}
      </strong>
    </section>
  );
}
