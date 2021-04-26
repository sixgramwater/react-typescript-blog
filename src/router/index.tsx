import React from 'react'
import NestedRoute from './NestedRoute';
import Home from '../pages/Home'
import ArticleView from '../pages/ArticleView';

const Login = () => {
  return (
    <h1>Login pages</h1>
  )
}

const Error = () => {
  return (
    <h1>404 pages</h1>
  )
}

const Subpage1 = () => {
  return (
    <h1>supages1</h1>
  )
}
const Subpage2 = () => {
  return (
    <h1>supage2</h1>
  )
}


const router = [
  {
    path: '/index',
    component: Home,
    // exact: true,
    routes: [
      {
        path: '/index/subpage1',
        component: Subpage1,
      },
      {
        path: '/index/subpage2',
        component: Subpage2,
      },
      {
        path: '/index/article',
        component: ArticleView,
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: Error,
  }
]

export default router;
export {
  NestedRoute,
}