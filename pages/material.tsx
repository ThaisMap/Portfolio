import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

import About from '../components/material/about';
import Skills from '../components/material/skills';
import Projects from '../components/material/projects';
import Contacts from '../components/material/contacts';

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
