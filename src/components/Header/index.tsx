import React from 'react';
import Nav from '../Nav'
import SearchBar from '../SearchBar';
import Logo from '../Logo'
import styles from './Header.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSidebarOpen } from '../../store/appSlice';
// interface IHeader {

// }

const Hamburgur = ({onClick}) => {
  return (
    <div className={styles.menuWrapper} onClick={onClick}>
      <GiHamburgerMenu className={styles.menu_btn} size={18}/>
    </div>
  )
}

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <header>
      <div className={styles.header_inner}>
        {/* <a href="#" className={styles.logo} style={{textDecoration: "none", color: "#000"}}>
          <h1>ReactApp</h1>
        </a> */}
        <Hamburgur onClick={()=>dispatch(setSidebarOpen())}/>
        <Logo></Logo>
        <Nav vertical={false}></Nav>
        <SearchBar></SearchBar>
        {/* <div className={styles.searchbar}>
          <input></input>
        </div> */}
      </div>
    </header>
  )
}

export default Header;