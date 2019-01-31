import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Liste from './components/listeWilders/FormWilders';
import Recherche from './components/recherche/FormRecherche';
import Delete from './components/delete/FormDelete';
import Modification from './components/modification/FormModifWilders';

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
          <Route path="/delete" component={ Delete }></Route>
          <Route path="/modification" component={ Modification }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
