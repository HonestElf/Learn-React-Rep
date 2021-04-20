import React, { Fragment } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import Login from "../Login";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";

import {
  logout,
  getIsAuthorized,
  getIsNetworkErrorPresent,
  getMessage,
} from "../../ducks";

const AppRouter = (props) => {
  //берем методы из пропсов
  const { isAuthorized, logout, isError, errorMessage } = props;

  //обработчки кнопки логаута
  const handleLogout = () => {
    console.log("logout button");
    logout();
  };

  return (
    <Fragment>
      {isAuthorized ? (
        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
          <div>You are authorized</div>
        </div>
      ) : (
        <div>You are not authorized</div>
      )}

      {isError ? (
        <div className="login__error">
          <p className="login_error-message">{errorMessage}</p>
        </div>
      ) : (
        ""
      )}

      <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute
          exact
          path="/users/me"
          isAuthorized={isAuthorized}
          component={UserPage}
        />

        <PrivateRoute
          path="/users/:name"
          isAuthorized={isAuthorized}
          component={UserPage}
        />

        <Redirect to="/users/me" />
      </Switch>
    </Fragment>
  );
};
//пхаем переменную в пропсы
const mapStateToProps = (state) => ({
  isAuthorized: getIsAuthorized(state),
  isError: getIsNetworkErrorPresent(state),
  errorMessage: getMessage(state),
});
//метод в пропсы
const mapDispatchToProps = { logout };

//оборачиваем компонент
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);
