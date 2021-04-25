import React from 'react';
import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
import './styles/reset.css';
import './styles/global.scss';
import { 
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home Pages</h1>
    </>
  )
}

const Blog = () => {
  return (
    <>
      <h1>Blog Pages</h1>
    </>
  )
}
const Dashboard = () => {
  return (
    <>
      <h1>Blog Pages</h1>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
