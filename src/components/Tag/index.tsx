import React from 'react';
import styles from './Tag.module.scss';

export default function Tag({children}) {
  return (
    <div className={styles.tag}>
      <a href="#">#{children}</a>
    </div>
  )
}
