import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '40%',
    zIndex: 1,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  label: {
    color: theme.palette.neutral,
    paddingLeft: theme.spacing(2),
    ...theme.typography.button,
  },
  level: {
    backgroundColor: theme.palette.primary.dark,
    zIndex: 2,
    borderRadius: 20,
  },
});

export default function SkillLevel(props) {
  const { skill } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.root}>
        <div className={classes.level} style={{ width: `${skill.perc}%` }}>
          <Typography className={classes.label}>{skill.tech}</Typography>
        </div>
      </Grid>
    </React.Fragment>
  );
}
