import React from 'react'
import Header from '../../components/Header'
import { NestedRoute } from '../../router';
import styles from './Home.module.scss';


export default function Home({routes}) {
  return (
    <>
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
        
    </>
  )
}
