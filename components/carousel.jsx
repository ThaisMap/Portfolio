import React, { useState } from 'react';
import styles from '../styles/carousel.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Dot from './Dot';

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

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(images/${images[currIndex]})` }}>
        <div className={styles.left} onClick={previousImage}>
          <FaArrowLeft />
        </div>
        <div className={styles.center}>
          {images.map((img, index) => (
            <div
              key={img}
              className={index == currIndex ? styles.activedot : styles.dots}>
              <Dot index={index} callback={setCurrIndex} />
            </div>
          ))}
        </div>
        <div className={styles.right} onClick={nextImage}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
