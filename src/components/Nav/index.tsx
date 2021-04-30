import styles from './Nav.module.scss';

// import React, { useEffect } from 'react';
// import Link from './'
import { NavLink} from 'react-router-dom';

export default function Nav({vertical}) {
  // let location  = useLocation();
  const routes = [
    {
      to: "/index/list",
      name: 'Home',
      exact: true,
    },
    {
      to: "/index/article?id=1",
      name: 'Blog',
    },
    {
      to: "/dashboard",
      name: 'Dashboard',
    },
  ]
  
  return (
    <nav className={styles.header_nav}>
      <ul className={vertical?styles.vertical : ''}>
        {
          routes.map(({to, name, exact}, index)=> {
            return (
              <li key={index}>
                <NavLink 
                  to={to} 
                  exact={exact?true:false}
                  activeClassName={styles.active}
               
                >{name}</NavLink>
              </li>
            )            
          })
        }
        {/* <li className={}><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> */}
      </ul>
    </nav>
    
  )
}
