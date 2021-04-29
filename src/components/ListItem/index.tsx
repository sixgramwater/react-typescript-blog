import styles from './ListItem.module.scss';
import React from 'react';
import Button from '../Button';
import Tag from '../../components/Tag';

export default function Item() {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.item_body}>
        <div className={styles.item_header}>
         <span>Amelia</span>
         <span>April 25</span>
        </div>
        <div className={styles.item_main}>
          <h2 className={styles.title}>Rejected by Facebook</h2>
          <div className={styles.item_tags}>
            <a href="#">Reactjs</a>
            <a href="#">FrontEnd</a>
          </div>
          <div className={styles.item_footer}>
            <Button>Read</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
