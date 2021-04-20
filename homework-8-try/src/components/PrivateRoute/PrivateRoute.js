import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isAuthorized, component: Component, ...rest } = props;

  return isAuthorized ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;

// import React, { PureComponent } from "react";
// import { Route, Redirect } from "react-router-dom";

// export default class PrivateRoute extends PureComponent {
//   render() {
//     const { isAuthorized, component: Component, ...rest } = this.props;

//     return isAuthorized ? (
//       <Route {...rest} render={(props) => <Component {...props} />} />
//     ) : (
//       <Redirect to="/login" />
//     );
//   }
// }
