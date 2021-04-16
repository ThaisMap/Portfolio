import React from "react";
import styles from "../styles/projects.module.css";
import CardProject from "./cardProject";
import { projetos } from "../dados";

export default function Projects() {
  return (
    <section className={"section-padding color-1"}>
      <h3 className={`text title`}>Projetos</h3>
      <div className={styles.projetos}>
        {projetos.map((projeto) => {
          return <CardProject key={projeto.name} project={projeto} />;
        })}
      </div>
    </section>
  );
}
