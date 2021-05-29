import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Section from './section';
import SkillLevel from './skillLevel';
import { makeStyles, createStyles } from '@material-ui/styles';
import theme from '../../theme';
import { habilidades } from '../../dados';

const useStyles = makeStyles(() =>
  createStyles({
    skillsection: {
      padding: theme.spacing(2),
    },
  })
);
function Skills() {
  const styles = useStyles();
  return (
    <Section secondary>
      <Typography variant='h4' gutterBottom>
        Habilidades e interesses
      </Typography>
      <Typography variant='body1' gutterBottom>
        Atualmente estou estudando React e CSS
      </Typography>
      <Grid container spacing={2} className={styles.skillsection}>
        {habilidades.map((skill) => (
          <SkillLevel key={skill.tech} skill={skill} />
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
