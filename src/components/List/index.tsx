import React from 'react';
import styles from './List.module.scss';
import Item from '../ListItem';

export default function List() {
  return (
    <div className={styles.listWrapper}>
      <ul>
        <li>
          <Item/>
        </li>
        <li>
          <Item/>
        </li>
        <li>
          <Item/>
        </li>
        <li>
          <Item/>
        </li>
      </ul>
    </div>
  )
}
