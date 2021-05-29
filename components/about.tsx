import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import React from 'react';
import Section from './section';

const useStyles = makeStyles(() =>
  createStyles({
    foto: {
      width: 200,
      height: 200,
    },
  })
);
export default function about() {
  const styles = useStyles();
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item md={3} sm={12}>
          <Avatar
            className={styles.foto}
            src='images/Thais.jpg'
            alt='Foto de Thais'
          />
        </Grid>
        <Grid item md={7}>
          <Typography variant='h2'>Olá!</Typography>
          <Typography variant='body1' paragraph>
            Meu nome é Thais Maria e eu gosto de desenvolver soluções práticas
            para problemas do dia a dia.
          </Typography>
          <Typography variant='body1' paragraph>
            A primeira linguagem de programação que aprendi foi C# e em meu
            emprego anterior criei vários projetos usando WPF e Windows Forms
            para automatizar rotinas antes feitas de forma manual ou facilitando
            processos que demandavam muito esforço.
          </Typography>
          <Typography variant='body1' paragraph>
            Agora estou iniciando minha carreira como dev Front-end e
            descobrindo coisas novas a cada dia.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
