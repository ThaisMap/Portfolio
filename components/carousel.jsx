import React, { useState } from "react";
import styles from "../styles/carousel.module.css";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

export default function Carousel(props) {
  const { images } = props;
  const [currIndex, setCurrIndex] = useState(0);

  function nextImage() {
    if (currIndex < images.length - 1) setCurrIndex(currIndex + 1);
    else setCurrIndex(0);
  }

  function previousImage() {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
    else setCurrIndex(images.length - 1);
  }

  function Dot(props) {
    const index = props.id;
    const onDotClick = () => {
      setCurrIndex(index);
    };
    return (
      <div
        key={index}
        className={index == currIndex ? styles.activedot : styles.dots}
        onClick={onDotClick}
      >
        <FaCircle />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(images/${images[currIndex]})` }}
      >
        <div className={styles.left} onClick={previousImage}>
          <FaArrowLeft />
        </div>
        <div className={styles.center}>
          {images.map((img, index) => (
            <Dot id={index} key={img} />
          ))}
        </div>
        <div className={styles.right} onClick={nextImage}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
