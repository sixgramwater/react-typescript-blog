import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ISyntaxTreeItem } from '../../utils/regex'
import styles from './Sidebar.module.scss';
import { Link } from 'react-scroll';


export default function Sidebar({syntaxTree}) {
  // let location = useLocation();
  // let path = location.pathname;
  // let path_ = path.substring(0, path.length);
  const [curActiveId, setCurActiveId] = useState(0);
  const handleSetActive = (id) => {
    if(id!==curActiveId)  setCurActiveId(id);
  }
  return (
    <div className={styles.sidebarWrapper}>
      <ul>
        {/* <li className={styles.active}>
          <a href="#" >Highlight current</a>
        </li> */}
        {/* <li><Link activeClass="active" className={styles.link} to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li> */}
      {
        syntaxTree.map((h2, i) => {
          const anchor = h2.value.toLowerCase().replaceAll(/[^\d\w]/g, "-");
          return (

            <li key={i} className={ curActiveId===i ? (styles.active): "" }><Link to={anchor} spy={true} smooth={true} duration={500} offset={-100} onSetActive={()=>handleSetActive(i)}>{h2.value}</Link></li>
          )
        })
      }
      </ul>
    </div>
  )
}
