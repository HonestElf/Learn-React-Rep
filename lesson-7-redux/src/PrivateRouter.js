import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuthorized } from "./reducers";

const PrivateRoute = ({ component: Component, IsAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuthorized ? <Component {...props} /> : <Redirect to="/auth" />
    }
  />
);

export default connect((state) => ({
  IsAuthorized: getIsAuthorized(state),
}))(PrivateRoute);

// export default connect((state) => ({
//   IsAuthorized: getIsAuthorized,
// }))(PrivateRoute);
