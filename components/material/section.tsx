import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import React, { ReactNode } from 'react';
import theme from '../../theme';

const useStyles = makeStyles(() =>
  createStyles({
    primary: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.primary.light,
    },
    secondary: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.secondary.light,
    },
  })
);

interface ISectionProps {
  secondary?: boolean;
  title?: string;
  children: ReactNode;
}

function Section({ secondary, title, children }: ISectionProps) {
  const styles = useStyles();
  return (
    <div className={secondary ? styles.secondary : styles.primary}>
      <Container>
        {title && (
          <Typography variant='h4' gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </div>
  );
}

export default Section;
