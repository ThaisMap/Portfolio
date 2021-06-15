import Head from 'next/head';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contacts from '../components/contacts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thais Maria - Portfolio</title>
      </Head>
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
