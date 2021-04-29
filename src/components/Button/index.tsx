import styles from './Button.module.scss';
import React, { MouseEventHandler, ReactNode } from 'react';

interface IButton{
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>|undefined,
}

export default function Button({children, onClick}:IButton) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}
