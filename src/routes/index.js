import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from '../containers/App';
import Home from '../containers/Home';
import Game from '../containers/Game';
import Result from '../containers/Result';

export const history = createBrowserHistory();

const Routes = () => {

  return (
          <Router history={ history }>
            <Switch>
                <App>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/game" component={ Game } />
                    <Route exact path="/result" component={ Result } />
                </App>
            </Switch>
          </Router>
  )
};

export default Routes
