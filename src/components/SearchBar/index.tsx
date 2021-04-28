import React from 'react'
import styles from './SearchBar.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <span className={styles.search_prefix}><CgSearch className={styles.searchIcon}/></span>
      <input type="text" className={styles.searchbar_inner}>
      {/* <span><FaSearch/></span> */}
      </input>
    </div>
  )
}
