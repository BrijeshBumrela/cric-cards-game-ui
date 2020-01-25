import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './containers/game/game';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Game />
          </Route>
          <Route path="/topics">
            {/* <Topics /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
