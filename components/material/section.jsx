import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import React from 'react';
import theme from '../../theme';

const useStyles = makeStyles(() =>
  createStyles({
    primary: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: theme.palette.primary.light,
    },
    secondary: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: theme.palette.neutral,
    },
  })
);

function Section(props) {
  const { secondary, title, children } = props;
  const styles = useStyles();
  return (
    <div className={secondary ? styles.secondary : styles.primary}>
      {title && (
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
}

export default Section;