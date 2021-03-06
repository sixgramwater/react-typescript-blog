import React, { useState } from 'react'
import styles from './Article.module.scss';
// import {markdown} from './example';
import ReactMarkdown from'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import Tag from '../Tag';

interface IArticle{
  title: string,
  content: string,
  tags?: Array<any>,
  author?:string,
}

const tags = [
  {
    label: 'Reactjs',
  },
  {
    label: 'FrontEnd'
  }
]

export default function Article({title, content}) {
  let location = useLocation();
  let path = location.pathname;
  let path_ = path.substring(0, path.length);
  // const [anchors, setAnchors] = useState<Array<string>>([]);
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={atomOneDark} language={"javascript"} children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={`inline`} {...props} >
          {children}
        </code>
      )
    },
    h2({node, children, ...props}) {
      const anchor = String(children).toLowerCase().replaceAll(/[^\d\w]/g, "-");
      return (
        <Element name={anchor}>
          <h2 id={anchor}>
            {/* <a href={path_+'#'+anchor} type="anchor">content</a> */}
            {children}
          </h2>
        </Element>
        
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
          <h1>{title}</h1>
        </div>
        <div className={styles.tags}>
          {
            tags.map((tag,i) => (
              <Tag key={i}>{tag.label}</Tag>
            ))

          }
          {/* <span className={styles.tag}>Frontend</span>
          <span className={styles.tag}>React</span> */}
        </div>
        <ReactMarkdown components={components as any} children={content}></ReactMarkdown>
      </div>
    </div>
  )
}
