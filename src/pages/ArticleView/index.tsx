import styles from './Article.module.scss';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import {markdown} from '../../assets/markdown';
import React, { useEffect, useState } from 'react';
import { generateSyntaxTree } from '../../utils/regex';
import { FaArrowUp } from 'react-icons/fa';
// import useElementOnScreen from '../../utils/intersection';
import { Events, animateScroll as scroll } from 'react-scroll';
import axios from '../../api/index';
import { useLocation } from 'react-router-dom';

let syntaxTree = generateSyntaxTree(markdown);
// const options = {
  
// }

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function ArticleView() {
  const query = useQuery();
  const [content, setContent] = useState('');
  const id = query.get("id");
  useEffect(() => {
    // console.log(query);
    if(id) {
      console.log(id);
      axios.get('/test2.md').then((res) => {
        // console.log(res);
        setContent(res.data as any);
        syntaxTree = generateSyntaxTree(res.data);
      });
    }
  }, [id]);

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
        // content={markdown}
        content={id? content : markdown}
        // refs={refs}
      />
      <div className={styles.sidebarWrapper}>
        <div className={styles.fixedWrapper}>
          <Sidebar 
            syntaxTree={ id?generateSyntaxTree(content):syntaxTree}
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
