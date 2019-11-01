import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home'
import RowScreen from './page/RowScreen'
import AddRowScreen from './page/AddRowScreen'
import WaitRowScreen from './page/WaitRowScreen'
import CounterOne from './page/CounterOne'
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/rowscreen" component = {RowScreen} />     
        <Route exact path = "/addrowscreen" component = {AddRowScreen} />     
        <Route exact path = "/counter/1" component = {CounterOne} />     
        <Route exact path = "/waitrowscreen" component = {WaitRowScreen} />     
        <Route component = {Home} />   
      </Switch>
      </div>
    </Router>
  );
}

export default App;
