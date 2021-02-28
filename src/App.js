import './App.scss';
import Member from './components/Member/Member';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from './hoc/Aux';
import Sprints from './containers/Sprints/Sprints';
import Navigation from './components/Navigation/Navigation';
import Estimates from './components/Estimates/Estimates';
import Progress from './containers/Progress/Progress';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Aux>
          <Navigation></Navigation>
          <Member></Member>
        </Aux>
        <Switch>
          <Route path="/sprints" component={Sprints}></Route>
          <Route path="/estimates" component={Estimates}></Route>
          <Route path="/projects"></Route>
          <Route path="/meetings" render={() => {}}></Route>
          <Route path="/progress" component={Progress}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
