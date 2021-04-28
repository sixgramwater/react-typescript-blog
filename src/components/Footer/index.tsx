import React from 'react'
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p>Entropy - built with React</p>
        <p>Copyright © 2021 Entropy Inc. </p>
      </div>
    </footer>
  )
}
