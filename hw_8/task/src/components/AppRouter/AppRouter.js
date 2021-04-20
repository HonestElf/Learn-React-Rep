import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Login';
import PrivateRoute from '../PrivateRoute';

// class AppRouter extends Component {
//   state = {
//     isAuthorized: true
//   };

//   render() {
//     const { isAuthorized } = this.state;

//     return (
//       <Fragment>
//         <p>Hello World</p>
//         <PrivateRoute isAuthorized={isAuthorized} />
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Redirect to="/users/me" />
//         </Switch>
//       </Fragment>
//     );
//   }
// }

const AppRouter = () => {
  const [isAuthorized, setIsAuthorize] = React.useState(false);

  return (
    <Fragment>
      <p>Hello World</p>
      <PrivateRoute isAuthorized={isAuthorized} />
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/users/me" />
      </Switch>
    </Fragment>
  );
};

export default AppRouter;
