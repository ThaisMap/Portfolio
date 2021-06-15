import React, { useState } from 'react';
import Dot from './dot';
import { Fab } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from './styles';

interface ICarouselProps {
  images: string[];
}

export default function Carousel({ images }: ICarouselProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const classes = useStyles();

  function nextImage() {
    if (currIndex < images.length - 1) setCurrIndex(currIndex + 1);
    else setCurrIndex(0);
  }

  function previousImage() {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
    else setCurrIndex(images.length - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <div className={classes.navIcons}>
          <Fab color='primary' onClick={previousImage}>
            <ChevronLeftIcon />
          </Fab>
        </div>
        <div className={classes.center}>
          <a
            className={classes.container}
            href={`images/${images[currIndex]}`}
            target='_blank'>
            <div
              className={classes.imageBackground}
              style={{
                backgroundImage: `url(images/${images[currIndex]})`,
              }}></div>
          </a>
          <div className={classes.dots}>
            {images.map((img: string, index: number) => (
              <div key={img}>
                <Dot
                  active={index == currIndex}
                  index={index}
                  callback={setCurrIndex}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.navIcons}>
          <Fab color='primary' onClick={nextImage}>
            <ChevronRightIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
}
