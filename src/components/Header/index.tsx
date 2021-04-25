import React from 'react';
import Nav from '../Nav'
import SearchBar from '../SearchBar';
import styles from './Header.module.scss';
// interface IHeader {

// }

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header_inner}>
        <a href="#" className={styles.logo} style={{textDecoration: "none", color: "#000"}}>
          <h1>ReactApp</h1>
        </a>
        <Nav></Nav>
        <SearchBar></SearchBar>
        {/* <div className={styles.searchbar}>
          <input></input>
        </div> */}
      </div>
    </header>
  )
}

export default Header;