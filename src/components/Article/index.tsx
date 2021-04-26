import React from 'react'
import styles from './Article.module.scss';
import {markdown} from './example';
import ReactMarkdown from'react-markdown';

export default function Article() {
  return (
    <div className={styles.articleWrapper}>
      
      <div className={styles.article_header}>
        <div className={styles.poster_container}>
          <img src="http://unsplash.it/1000/420/" alt="img"/>
        </div>
      </div>
      <div className={styles.article_content}>
        <div className={styles.title}>
          <h2>JavaScript Visualized: the JavaScript Engine</h2>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>Frontend</span>
          <span className={styles.tag}>React</span>
        </div>
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </div>
    </div>
  )
}
