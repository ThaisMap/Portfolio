import React from 'react';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <section className={`section-padding color-1 ${styles.container}`}>
      <img
        className={styles.image}
        src='images/Thais.jpg'
        alt='Foto de Thais'
      />
      <div className={styles.info}>
        <h1 className={`text title`}>Olá!</h1>
        <p className={`text`}>
          Meu nome é Thais Maria e eu gosto de desenvolver soluções práticas
          para problemas do dia a dia.
        </p>
        <p className={`text`}>
          A primeira linguagem de programação que aprendi foi C# e em meu
          emprego anterior criei vários projetos usando WPF e <br />
          Windows Forms para automatizar rotinas antes feitas de forma manual ou
          facilitando processos que demandavam muito esforço.
        </p>
        <p className={`text`}>
          Agora estou iniciando minha carreira como dev Front-end e descobrindo
          coisas novas a cada dia.
        </p>
      </div>
    </section>
  );
}
