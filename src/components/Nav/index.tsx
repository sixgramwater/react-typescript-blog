import styles from './Nav.module.scss';

import React, { useEffect } from 'react';
// import Link from './'
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  let location  = useLocation();
  const routes = [
    {
      to: "/",
      name: 'Home',
      exact: true,
    },
    {
      to: "/blog",
      name: 'Blog',
    },
    {
      to: "/dashboard",
      name: 'Dashboard',
    },
  ]
  useEffect(() => {
    console.log(location.pathname)
    // return () => {
    //   cleanup
    // }
  }, [location])
  return (
    <nav className={styles.header_nav}>
      <ul>
        {
          routes.map(({to, name, exact}, index)=> {
            return (
              <li key={index}>
                <NavLink 
                to={to} 
                exact={exact?true:false}
                activeClassName={styles.active}
                // activeStyle={{
                //   // fontWeight: "bold",
                //   // color: "red"
                //   // color: "rbg(0, 118, 255)",
                // }}
                >{name}</NavLink>
              </li>
            )
            
            // <li className={to===location.pathname? `${styles.active}`: ""}>
            //   <Link to={to}>{name}</Link>
            // </li>
          })
        }
        {/* <li className={}><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> */}
      </ul>
    </nav>
    
  )
}
