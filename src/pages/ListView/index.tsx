import List from '../../components/List';

import React, { useEffect, useState } from 'react';
// import axios from '../../api/index';
import { useLocation } from 'react-router-dom';
import { getArticleList } from '../../api/index';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ListView() {
  const query = useQuery();
  const start = query.get("start") || 0;
  const end = query.get("end") || 20;
  const param = { start, end };
  console.log(param);
  const [data, setData] = useState([]);
  // let data = [];

  useEffect(() => {
    getArticleList(param).then(res => {
      setData(res.data);
      // console.log(res);
    })
  }, [start, end])
  return (
    <div>
      <List data={
        data
        }/>
    </div>
  )
}
