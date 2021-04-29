import styles from './ListItem.module.scss';
import React from 'react';
import Button from '../Button';
import Tag from '../../components/Tag';
import { BiLike } from 'react-icons/bi';
import { formatDate } from '../../utils/dateFormatter';
// import moment from 'moment';
// var avatar = require('/a')

export default function Item({title, date, username, likes, avatar}) {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.item_body}>
        <div className={styles.item_header}>
          <div className={styles.item_avatar}>
            {/* {avatar && 
              <img src={likes} alt={avatar}></img>
            } */}
            <img src="/avatar.png" alt="avatar"/>
            {/* <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6da80298f72bd035290617f7274156c6f8e785f77d29-n6QJok_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622279669&t=409fd58ce83624dcfb0c3d759eaf9528" alt="avatar"/> */}
          </div>
          <div className={styles.item_info}>
            <span>{username}</span>
            <span>{formatDate(date)}</span>
          </div>
        </div>
        <div className={styles.item_main}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.item_tags}>
            <Tag>ReactJs</Tag>
            <Tag>FrontEnd</Tag>
            {/* <a href="#">Reactjs</a>
            <a href="#">FrontEnd</a> */}
          </div>
          <div className={styles.item_footer}>
            <div className={styles.item_op}>
              <a href="#" >
                <BiLike className={styles.svg}/>
                {likes}
                <span>Likes</span>
              </a>
            </div>
            <Button>Read</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
