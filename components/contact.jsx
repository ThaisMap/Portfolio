import React from "react";
import styles from "../styles/contact.module.css";
import { ImLinkedin, ImGithub, ImMail2 } from "react-icons/im";

export default function Contact() {
  return (
    <section className={`section-padding color-2`}>
      <h3 className={`text title`}>Contato</h3>
      <p className={`text text-large`}>Quer me conhecer melhor?</p>
      <div className={styles.links}>
        <p className={`text`}>
          <a href="https://github.com/ThaisMap">
            <ImGithub /> Github
          </a>
        </p>
        <p>
          <a
            className={`text`}
            href="https://www.linkedin.com/in/thais-maria-pinto/"
          >
            <ImLinkedin /> LinkedIn
          </a>
        </p>
        <p className={`text`}>
          <a href="mailto:thais.map@hotmail.com">
            <ImMail2 /> E-mail
          </a>
        </p>
      </div>
    </section>
  );
}
