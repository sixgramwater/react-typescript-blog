import React from 'react';
import styles from './List.module.scss';
import Item from '../ListItem';


export default function List({data}) {
  console.log(data);
  return (
    <div className={styles.listWrapper}>
      {!data && 
        <div>Ops, Something Error Happened</div>
        // <div>Empty data</div>
      }
      <ul>
        {data.map(item => {
          return (
            <li>
              <Item 
                title={item.title} 
                date={item.date} 
                username={item.username} 
                likes= {item.likes}
                avatar={item.avatar}
              />
            </li>
          )
        })}
        
        {/* <li>
          <Item/>
        </li> */}
      </ul>
    </div>
  )
}
