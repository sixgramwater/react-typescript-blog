import styles from './Article.module.scss';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import {markdown} from '../../assets/markdown';
// imprt {generateSyntaxTree}
import React from 'react';
import { generateSyntaxTree } from '../../utils/regex';
import useScrollPosition from '../../utils/scrollPosition';
// const Sidebar = ()=> {
//   return (
//     <aside className={styles.sidebarWrapper}>
//       <ul>
//         {/* <li>men1</li> */}
//         <li><a href="/index/article#make-sure-everything-is-ok">make sure everything is ok</a></li>
//         <li>menu2</li>
//         <li>menu3</li>
//       </ul>
//     </aside>
//   )
// }
const syntaxTree = generateSyntaxTree(markdown);

export default function ArticleView() {

  // useScrollPosition(
  //   ({ currPos })
  // )
  return (
    <div className={styles.articleWrapper}>
      <Article 
        title="JavaScript Visualized: the JavaScript Engine" 
        content={markdown}
      />
      <div></div>
      <Sidebar 
        syntaxTree={syntaxTree}
      />
    </div>
  )
}
