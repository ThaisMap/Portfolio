import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

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
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}
