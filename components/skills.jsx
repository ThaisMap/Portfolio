import React from 'react';
import styles from '../styles/skills.module.css';

export default function Skills() {
  return (
    <section className={`section-padding color-2`}>
      <h3 className={`text title`}>Habilidades e interesses</h3>
      <div className={styles.flexrow}>
        <div className={styles.coluna}>
          <p className={`text text-large  padding-left-1`}>
            Já desenvolvi projetos usando as seguintes tecnologias:{' '}
          </p>
          <ul className={`text padding-left-3`}>
            <li>C#</li>
            <li>WPF</li>
            <li>SQL Server</li>
            <li>Entity Framework</li>
            <li>Windows Forms</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Electron</li>
          </ul>
        </div>
        <div className={styles.coluna}>
          <p className={`text text-large padding-left-1`}>
            Foco dos estudos atuais:
          </p>
          <p className={`text padding-left-3`}>ReactJS</p>
        </div>
      </div>
    </section>
  );
}
