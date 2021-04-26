import React, { useState } from 'react'
import styles from './Article.module.scss';
import {markdown} from './example';
import ReactMarkdown from'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useLocation } from 'react-router-dom';

// const components = {
//   code({node, inline, className, children, ...props}) {
//     const match = /language-(\w+)/.exec(className || '')
//     return !inline && match ? (
//       <SyntaxHighlighter style={atomOneDark} language={match[1]} PreTag="pre" children={String(children).replace(/\n$/, '')} {...props} />
//     ) : (
//       <code className={className} {...props} />
//     )
//   },
//   h2({node, children, ...props}) {
//     return (
//       <h2>
//         <a href={'#'+String(children).toLowerCase().replaceAll(/\s/, "-")} type="anchor"></a>
//         {children}
//       </h2>
//     )
//   }
// }

const Sidebar = () => {
  // const 
  return (
    <ul>
      <li>
        
      </li>
    </ul>
  )
}

export default function Article() {
  let location = useLocation();
  let path = location.pathname;
  let path_ = path.substring(0, path.length);
  // const [anchors, setAnchors] = useState<Array<string>>([]);
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={atomOneDark} language={match[1]} PreTag="pre" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    },
    h2({node, children, ...props}) {
      const anchor = String(children).toLowerCase().replaceAll(/[^\d\w]/g, "-");
      // setAnchors(()=>{
      //   anchors.push(anchor);
      //   return [...anchors];
      // })
      return (
        <h2 id={anchor}>
          <a href={path_+'#'+anchor} type="anchor"></a>
          {children}
        </h2>
      )
    }
  }
  return (
    <div className={styles.articleWrapper}>
      
      <div className={styles.article_header}>
        <div className={styles.poster_container}>
          <img src="http://unsplash.it/1000/420/" alt="img"/>
        </div>
      </div>
      <div className={styles.article_content}>
        <div className={styles.title}>
          <h1>JavaScript Visualized: the JavaScript Engine</h1>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>Frontend</span>
          <span className={styles.tag}>React</span>
        </div>
        <ReactMarkdown components={components as any} children={markdown}></ReactMarkdown>
      </div>
    </div>
  )
}
