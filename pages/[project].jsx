import styles from "../styles/projects/project.module.css";
import Carousel, {
  autoplayPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Link from "next/link";
import { ImArrowLeft } from "react-icons/im";
import {
  FaArrowLeft,
  FaArrowRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { projetos } from "../dados";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { project } = router.query;
  const projectData = projetos.find((projeto) => projeto.page == project);
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
        </div>
        <div className={styles.carrossel}>
          <Carousel
            plugins={[
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 6000,
                },
              },
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button className={styles.arrows}>
                      <FaArrowLeft />
                    </button>
                  ),
                  arrowLeftDisabled: (
                    <button className={styles.arrows}>
                      <FaAngleLeft />
                    </button>
                  ),
                  arrowRight: (
                    <button className={styles.arrows}>
                      <FaArrowRight />
                    </button>
                  ),
                  arrowRightDisabled: (
                    <button className={styles.arrows}>
                      <FaAngleRight />
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
            animationSpeed={1500}
          >
            {projectData.images.map((image) => {
              return <img className={styles.imagem} src={`images/${image}`} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
