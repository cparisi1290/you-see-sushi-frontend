import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common-components/NavBar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './common-components/Home';
import sushiContainer from './containers/sushiIndexContainer';
import sashimiContainer from './containers/sashimiIndexContainer';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/home' component={Home}></Route>
              <Route path='/sushi' component={sushiContainer}></Route>
              <Route path='/sashimi' component={sashimiContainer}></Route>
            </Switch>      
          </div>
        </Router>
        </div>
    );
  }
}

export default App; 
