//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Navbar from './components/CustomNavbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
        </div>
      </Router>
    )
  }
}

export default App;
