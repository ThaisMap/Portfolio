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
          Atualmente trabalho da Expresso Rodominas, e já ajudei o pessoal com
          várias rotinas que demandavam muito esforço e agora são automatizadas.
        </p>
        <p className={`text`}>
          A primeira linguagem de programação que aprendi foi C# e vários desses
          projetos foram feitos com WPF.
        </p>
      </div>
    </section>
  );
}
