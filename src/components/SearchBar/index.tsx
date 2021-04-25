import React from 'react'
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" className={styles.searchbar_inner} placeholder="type to search"/>
    </div>
  )
}
