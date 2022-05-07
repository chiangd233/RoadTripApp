import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Header from'./components/header'
import Footer from './components/footer'
import Register from './components/register'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path= '/' component = {App} />
        <Route path= '/register' component = {Register} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

