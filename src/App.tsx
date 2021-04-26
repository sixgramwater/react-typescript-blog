import React from 'react';
import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
import './styles/reset.css';
import './styles/global.scss';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import routes from './router/index';
import { NestedRoute } from './router';

const Home = () => {
  return (
    <>
      <h1>Home Pages</h1>
    </>
  )
}

const Login = () => {
  return (
    <>
      <h1>Login Pages</h1>
    </>
  )
}
const Error = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>
    </>
  )
}


function App() {
  console.log(routes);
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route,i) =>
            // <Route path={route.path} key={i} component={route.component}/>)
            <NestedRoute key={i} {...route}/>)
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
