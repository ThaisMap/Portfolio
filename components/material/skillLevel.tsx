import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import { Grid, Typography } from '@material-ui/core';
import { ISkill } from '../../types';

const useStyles = makeStyles({
  root: {
    width: '40%',
    zIndex: 1,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  label: {
    color: theme.palette.secondary.main,
    paddingLeft: theme.spacing(2),
    ...theme.typography.button,
  },
  level: {
    backgroundColor: theme.palette.primary.dark,
    zIndex: 2,
    borderRadius: 20,
  },
});

export default function SkillLevel(props: ISkill) {
  const { label, level } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.root}>
        <div className={classes.level} style={{ width: `${level}%` }}>
          <Typography className={classes.label}>{label}</Typography>
        </div>
      </Grid>
    </React.Fragment>
  );
}
