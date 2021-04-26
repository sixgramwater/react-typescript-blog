import React from 'react'
import Header from '../../components/Header'
// import { 
//   // HashRouter as Router,
//   Switch,
//   // Route,
//   // Redirect,
// } from 'react-router-dom';
import { NestedRoute } from '../../router';
import styles from './Home.module.scss';
// import routes from '../../router'


export default function Home({routes}) {
  return (
    <>
      <Header></Header>
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
