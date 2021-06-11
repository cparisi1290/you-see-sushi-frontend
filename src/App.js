import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common-components/NavBar';
import { Switch, Route, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from './common-components/Home';
import sushiContainer from './containers/sushiIndexContainer';
import sashimiContainer from './containers/sashimiIndexContainer';
import orderContainer from './containers/orderContainer';
import { fetchSushi } from './actions/sushiActions'
import { fetchSashimi } from './actions/sashimiActions'


const App = () => { 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSushi())
    dispatch(fetchSashimi())
  }, [])

    return (
      <div className="App">
        <NavBar/>
        <div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/sushi' component={sushiContainer}></Route>
            <Route path='/sashimi' component={sashimiContainer}></Route>
          </Switch>      
        </div>
      </div>
    );
  }

export default App; 
