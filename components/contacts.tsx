import { Box, Typography, makeStyles, createStyles } from '@material-ui/core';
import React from 'react';
import Section from './section';
import { ImLinkedin, ImGithub, ImMail2 } from 'react-icons/im';
import theme from '../theme';
import LinkMaterial from './LinkMaterial';

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
        <LinkMaterial href='https://www.linkedin.com/in/thais-maria-pinto/'>
          <ImLinkedin />
          <span className={styles.icon}>LinkedIn</span>
        </LinkMaterial>
        <LinkMaterial href='https://github.com/ThaisMap'>
          <ImGithub />
          <span className={styles.icon}>GitHub</span>
        </LinkMaterial>
        <LinkMaterial href='mailto:thais.map@hotmail.com'>
          <ImMail2 />
          <span className={styles.icon}>E-mail</span>
        </LinkMaterial>
      </Box>
    </Section>
  );
}

export default Contacts;
