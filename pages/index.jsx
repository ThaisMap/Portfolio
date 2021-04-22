import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Skills from "../components/skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thais Maria - Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
