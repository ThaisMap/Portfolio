import React from "react";
import styles from "../styles/skillLevel.module.css";

export default function SkillLevel(props) {
  const { skill } = props;
  return (
    <li className={styles.container}>
      <div className={styles.level} style={{ width: `${skill.perc}%` }}>
        <p className={styles.tech}>{skill.tech}</p>
      </div>
    </li>
  );
}
