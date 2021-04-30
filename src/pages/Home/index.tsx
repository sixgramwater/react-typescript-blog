import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { NestedRoute } from '../../router';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSidebarClose } from '../../store/appSlice';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import { CSSTransition } from 'react-transition-group'


export default function Home({routes}) {
  const sidebarOpen = useAppSelector((state)=> state.app.sidebarOpen);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={`${styles.sidebarWrapper} ${sidebarOpen ? styles.sidebar_open:''}`}>
        <div className={styles.sidebar_header}>
          <Logo/>
        </div>
        <div className={styles.sidebar_main}>
          <Nav vertical={true} />
        </div>
      </div>
      <div 
        className={`${styles.mask} ${sidebarOpen ? styles.mask_open:''}`}
        onClick={()=>dispatch(setSidebarClose())}
      ></div>
      {/* {
        sidebarOpen &&
        <div className={styles.mask}></div>
      } */}
      <div className={styles.headerWrapper}>
        <Header></Header>
      </div>
      {/* <Header></Header> */}
      <main className={styles.mainWrapper}>
        <div className={styles.main_inner}>
          {routes.map((route, i) =>
            // <Route path={route.path} key={i} component={route.component}/>
            <NestedRoute key={i} {...route}/>
            
          )}
        </div>
      </main>
      <Footer></Footer>
      
    </>
  )
}
