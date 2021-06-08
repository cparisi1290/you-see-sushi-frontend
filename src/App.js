import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './components/Home';
import sushiContainer from './containers/sushiIndexContainer';
import sashimiContainer from './containers/sashimiIndexContainer';
import sushiShowContainer from './containers/sushiShowContainer'

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <div>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/sushi' component={sushiContainer}></Route>
              <Route path='/sashimi' component={sashimiContainer}></Route>
              <Route path='/sushi/:id' component={sushiShowContainer}></Route>
            </Switch>      
          </div>
        </Router>
      </div>
    );
  }
}

const mstp = state => {
  return {
    sushi: state.sushiReducer.sushi
  }
}
export default connect(mstp)(App); 
