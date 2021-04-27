import React from 'react';
import { useLocation } from 'react-router-dom';
import { ISyntaxTreeItem } from '../../utils/regex'
import styles from './Sidebar.module.scss';

export default function Sidebar({syntaxTree}) {
  let location = useLocation();
  let path = location.pathname;
  let path_ = path.substring(0, path.length);
  return (
    <div className={styles.sidebarWrapper}>
      <ul>
        <li className={styles.active}>
          <a href="#" >Highlight current</a>
        </li>
      {
        syntaxTree.map((h2) => {
          const anchor = h2.value.toLowerCase().replaceAll(/[^\d\w]/g, "-");
          return (
            <li>
              <a href={path_+'#'+anchor} type="anchor">{h2.value}</a>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
