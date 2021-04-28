import styles from './Article.module.scss';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import {markdown} from '../../assets/markdown';
import React, { useEffect } from 'react';
import { generateSyntaxTree } from '../../utils/regex';
import { FaArrowUp } from 'react-icons/fa';
// import useElementOnScreen from '../../utils/intersection';
import { Events, animateScroll as scroll } from 'react-scroll';

const syntaxTree = generateSyntaxTree(markdown);
// const options = {
  
// }
export default function ArticleView() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, []);

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
      <div className={styles.scrollBtn}>
        <a onClick={scroll.scrollToTop}><FaArrowUp/></a>
      </div>
      
    </div>
  )
}
