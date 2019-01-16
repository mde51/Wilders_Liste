import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Profile from './components/Profile';
import Liste from './components/listeWilders/Liste';
import Recherche from './components/recherche/Liste';
import Delete from './components/delete/Liste';

class App extends Component {
  render() {
    return (
        <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/signup" component={ SignUp }></Route>
          <Route path="/liste" component={ Liste }></Route>
          <Route path="/recherche" component={ Recherche}></Route>
          <Route path="/profile" component={ Profile }></Route>
          <Route path="/signin" component={ SignIn }></Route>
          <Route path="/delete" component={ Delete }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
