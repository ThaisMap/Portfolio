import styles from "../styles/projects/project.module.css";

import Carousel from "../components/carousel";
import Link from "next/link";
import { ImArrowLeft } from "react-icons/im";
import { projetos } from "../dados";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { project } = router.query;

  debugger;
  const projectData = project
    ? projetos.find((projeto) => projeto.page == project)
    : projetos[0];

  return (
    <div className={"color-1 section-padding " + styles.container}>
      <Link href="/">
        <a className={`text text-large`}>
          <ImArrowLeft className={`margin-bottom`} />
        </a>
      </Link>
      <div className={styles.flexrow}>
        <div className={styles.coluna}>
          <h3 className={`text title`}> {projectData.name}</h3>
          <p className={`text padding-bottom`}>{projectData.description}</p>
          <strong className={`text ` + styles.textCenter}>
            Tecnologias: {projectData.technologies}
          </strong>
          {projectData.link && (
            <a href={projectData.link}>
              <p className={styles.link}>Acesse</p>
            </a>
          )}
        </div>
        <div className={styles.carrossel}>
          <Carousel images={projectData.images} />
        </div>
      </div>
    </div>
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
      { params: { project: "produsis" } },
      { params: { project: "ligar" } },
      { params: { project: "quotesweb" } },
      { params: { project: "quotesapp" } },
      { params: { project: "quandofoi" } },
      { params: { project: "outlook" } },
    ],
    fallback: false,
  };
}
