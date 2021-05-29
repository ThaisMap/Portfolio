import {
  Box,
  Typography,
  Link,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import React from 'react';
import Section from './section';
import { ImLinkedin, ImGithub, ImMail2 } from 'react-icons/im';
import theme from '../../theme';

const useStyles = makeStyles(() =>
  createStyles({
    linksList: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing(6),
      '& :hover': {
        fontWeight: 'bold',
      },
    },
    icon: { paddingLeft: theme.spacing(1) },
  })
);

function Contacts() {
  const styles = useStyles();
  return (
    <Section secondary title='Contatos'>
      <Typography variant='h6' gutterBottom>
        Quer conhecer melhor meu trabalho?{' '}
      </Typography>
      <Box className={styles.linksList}>
        <Link
          href='https://www.linkedin.com/in/thais-maria-pinto/'
          target='_blank'
          rel='noreferrer'
          variant='body1'>
          <ImLinkedin />
          <span className={styles.icon}>LinkedIn</span>
        </Link>
        <Link
          href='https://github.com/ThaisMap'
          target='_blank'
          rel='noreferrer'
          variant='body1'>
          <ImGithub />
          <span className={styles.icon}>GitHub</span>
        </Link>
        <Link
          href='mailto:thais.map@hotmail.com'
          target='_blank'
          rel='noreferrer'
          variant='body1'>
          <ImMail2 />
          <span className={styles.icon}>E-mail</span>
        </Link>
      </Box>
    </Section>
  );
}

export default Contacts;
