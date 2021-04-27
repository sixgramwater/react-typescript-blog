import styles from './Article.module.scss';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import {markdown} from '../../assets/markdown';
import React from 'react';
import { generateSyntaxTree } from '../../utils/regex';
import useElementOnScreen from '../../utils/intersection';

const syntaxTree = generateSyntaxTree(markdown);
// const options = {
  
// }
export default function ArticleView() {
  // let refs:any = [];
  // let visibles:any = [];
  // syntaxTree.forEach(h2=>{
  //   const [ref, isVisible] = useElementOnScreen({
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   });
  //   refs.push(ref);
  //   visibles.push(isVisible);
  // });
  return (
    <div className={styles.articleWrapper}>
      <Article 
        title="JavaScript Visualized: the JavaScript Engine" 
        content={markdown}
        // refs={refs}
      />
      <div className={styles.sidebarWrapper}>
        <div className={styles.fixedWrapper}>
          <Sidebar 
            syntaxTree={syntaxTree}
            // visibles={visibles}
          />
        </div>
        
      </div>
      
    </div>
  )
}
