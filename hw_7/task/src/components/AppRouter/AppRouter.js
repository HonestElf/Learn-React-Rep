import React, { Component } from 'react';
import './AppRouter.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
