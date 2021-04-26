import styles from './Article.module.scss';
import Article from '../../components/Article'

import React from 'react'

const Sidebar = ()=> {
  return (
    <aside className={styles.sidebarWrapper}>
      <ul>
        {/* <li>men1</li> */}
        <li><a href="/index/article#make-sure-everything-is-ok">make sure everything is ok</a></li>
        <li>menu2</li>
        <li>menu3</li>
      </ul>
    </aside>
  )
}

export default function ArticleView() {
  return (
    <div className={styles.articleWrapper}>
      <Article></Article>
      <Sidebar></Sidebar>
    </div>
  )
}
