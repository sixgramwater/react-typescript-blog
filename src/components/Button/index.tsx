import styles from './Button.module.scss';
import React from 'react';

export default function Button({children}) {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  )
}
