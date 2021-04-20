import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = (props) => {
  const { isAuthorized, component: Component } = props;
  return isAuthorized ? (
    <Route render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
