import React from "react";
import styles from "../styles/skills.module.css";
import SkillLevel from "./skillLevel";
import { habilidades } from "../dados";
export default function Skills() {
  return (
    <section className={`section-padding color-2`}>
      <h3 className={`text title`}>Habilidades e interesses</h3>
      <div className={styles.flexrow}>
        <div className={styles.coluna}>
          <ul className={`text padding-left-3`}>
            {habilidades.map((tech) => (
              <SkillLevel skill={tech} />
            ))}
          </ul>
        </div>
        <div className={styles.coluna}>
          <p className={`text title padding-left-1`}>
            Neste momento meu foco está em
          </p>
          <p className={`text text-large padding-left-3`}> Estudar ReactJS</p>
        </div>
      </div>
    </section>
  );
}
