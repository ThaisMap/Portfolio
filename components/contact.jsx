import React from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <section className={`section-padding color-2`}>
      <h3 className={`text title`}>Contato</h3>
      <p className={`text text-large`}>Quer me conhecer melhor?</p>
      <p className={`text`}>
        <a href='https://github.com/ThaisMap'>Meu Github</a>
      </p>
      <p className={`text`}>
        <a href='https://www.linkedin.com/in/thais-maria-pinto/'>
          Meu linkedin
        </a>
      </p>
      <p className={`text`}>
        <a href='mailto:thais.map@hotmail.com'>Meu e-mail</a>
      </p>
    </section>
  );
}
