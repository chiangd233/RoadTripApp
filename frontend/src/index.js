import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App';
import RoadTripDetail from './components/roadtripdetail';
import RoadTripCreate from './components/roadtripcreate'
import ThingsTodo from './components/thingstodo'
import ThingsTodoDetail from './components/thingstododetail'
import CreateThingsTodo from './components/thingstodocreate'
import Header from'./components/header'
import Footer from './components/footer'
import SignUp from './components/register'
import SignIn from './components/login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path= '/' element = {<App />} />
        <Route path = '/:id' element = {<RoadTripDetail />} />
        <Route path = '/create' element = {<RoadTripCreate />} />
        <Route path = '/thingstodo' element = {<ThingsTodo />} />
        <Route path = '/thingstodo/:id' element = {<ThingsTodoDetail />} />
        <Route path = '/thingstodo/create' element = {<CreateThingsTodo />} />
        {/* <Route path = '/register' component = {SignUp} />
        <Route path = '/login' component = {SignIn} /> */}
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

