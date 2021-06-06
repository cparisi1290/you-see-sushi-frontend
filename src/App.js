import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './components/Home';
import sushiContainer from './containers/sushiContainer';
import sashimiContainer from './containers/sashimiContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/sushi" component={sushiContainer}></Route>
            <Route path="/sashimi" component={sashimiContainer}></Route>
          </Switch>
        </div>


      </Router>

    </div>
  );
}

export default App; 
