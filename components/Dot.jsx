import React from 'react';
import { FaCircle } from 'react-icons/fa';
import styles from '../styles/carousel.module.css';

export default function Dot(props) {
  const { index, callback } = props;
  const onDotClick = () => {
    callback(index);
  };
  return (
    <div onClick={onDotClick}>
      <FaCircle />
    </div>
  );
}
