import React from 'react'
import styles from './Logo.module.scss';
import LogoImg from '../../assets/logo2.png';

export default function Logo() {
  return (
    <a href="#" className={styles.logo_a}>
      <h1>EntropyIncrease</h1>
      <img src={LogoImg} alt="EntropyIncrase"/>
    </a>
  )
}
