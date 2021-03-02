import React, { PureComponent } from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from '../Public/Public';
import Login from '../Login/Login';
import Private from '../Private/Private';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <ul>
            <li>
              <Link to="/">Main Page </Link>
            </li>
            <li>
              <Link to="/private">Secret Page </Link>
            </li>
            <li>
              <Link to="/login">Enter </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Redirect to="/" />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
