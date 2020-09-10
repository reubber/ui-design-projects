import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Home from './components/Home';
import Header from './components/Header';

function Routes() {
  return (
    <Router>
        <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
      
    </Router>
    
  )
}

export default Routes