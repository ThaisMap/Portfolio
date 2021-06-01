import Carousel from '../components/Carousel';
import Link from 'next/link';
import { projetos } from '../dados';
import { useRouter } from 'next/router';
import LinkMaterial from '../components/LinkMaterial';
import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import theme from '../theme';

const useStyles = makeStyles(() =>
  createStyles({
    fullHeight: {
      height: '95vh',
    },
    secondary: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.secondary.light,
    },
    conteudo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
);

export default function Project() {
  const router = useRouter();
  const { project } = router.query;
  const styles = useStyles();

  const projectData = project
    ? projetos.find((projeto) => projeto.page == project)
    : projetos[0];

  return (
    <Container className={styles.secondary} maxWidth={false}>
      <Container>
        <Grid className={styles.fullHeight} container spacing={5}>
          <Grid className={styles.conteudo} item md={4} xs={12}>
            <div>
              <Typography variant='h4' gutterBottom>
                {projectData.name}
              </Typography>
              <Typography gutterBottom>{projectData.description}</Typography>
              <Typography variant='subtitle2'>
                Tecnologias: {projectData.technologies}
              </Typography>
              {projectData.link && (
                <LinkMaterial href={projectData.link}>Acesse</LinkMaterial>
              )}
            </div>
            <Link href='/'>
              <Button variant='contained' color='primary'>
                Voltar
              </Button>
            </Link>
          </Grid>
          <Grid item md={8} xs={12}>
            <Carousel images={projectData.images} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { project } = params;
  return {
    props: { project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: 'produsis' } },
      { params: { project: 'ligar' } },
      { params: { project: 'quotesweb' } },
      { params: { project: 'quotesapp' } },
      { params: { project: 'quandofoi' } },
      { params: { project: 'outlook' } },
    ],
    fallback: false,
  };
}
