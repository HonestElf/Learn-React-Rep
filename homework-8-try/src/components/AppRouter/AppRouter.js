import React, { Fragment } from "react";
import { Switch, withRouter, Route, Redirect } from "react-router-dom";
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

import "./AppRouter.css";

const AppRouter = (props) => {
  //берем методы из пропсов
  const { isAuthorized, isErrorExist, errorMessage, logout } = props;

  //обработчик кнопки логаута
  const handleLogout = React.useCallback(() => {
    console.log("logout buttonPushed");
    logout();
  }, [logout]);

  return (
    <Fragment>
      {isAuthorized ? (
        <div className="login__section">
          <button onClick={handleLogout} className="login__section-button">
            Logout
          </button>
          <div>You are authorized</div>
        </div>
      ) : (
        <div className="login__section">You are not authorized</div>
      )}

      {isErrorExist && (
        <div className="login__section">
          <p className="login__section-error">{errorMessage}</p>
        </div>
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
const mapStateToProps = (state) => {
  return {
    isAuthorized: getIsAuthorized(state),
    isErrorExist: getIsNetworkErrorPresent(state),
    errorMessage: getMessage(state),
  };
};

//метод в пропсы
const mapDispatchToProps = {
  logout,
};

//оборачиваем компонент
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);

// import React, { Component, Fragment } from "react";
// import { Switch, withRouter, Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import Login from "../Login";
// import UserPage from "../UserPage";
// import PrivateRoute from "../PrivateRoute";
// import {
//   logout,
//   getIsAuthorized,
//   getIsNetworkErrorPresent,
//   getMessage,
// } from "../../ducks";

// import "./AppRouter.css";

// export class AppRouter extends Component {
//   handleLogout = () => {
//     const { logout } = this.props;

//     logout();
//   };

//   render() {
//     const { isAuthorized, isErrorExist, errorMessage } = this.props;

//     return (
//       <Fragment>
//         {isAuthorized && (
//           <div className="login-notes">
//             <button onClick={this.handleLogout}>Logout</button>
//           </div>
//         )}

//         {isErrorExist && (
//           <div className="login-notes">
//             <p className="error">{errorMessage}</p>
//           </div>
//         )}

//         <Switch>
//           <Route path="/login" component={Login} />
//           <PrivateRoute
//             path="/users/me"
//             component={UserPage}
//             isAuthorized={isAuthorized}
//             exact
//           />
//           <PrivateRoute
//             path="/users/:name"
//             component={UserPage}
//             isAuthorized={isAuthorized}
//           />
//           <Redirect to="/users/me" />
//         </Switch>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthorized: getIsAuthorized(state),
//     isErrorExist: getIsNetworkErrorPresent(state),
//     errorMessage: getMessage(state),
//   };
// };

// const mapDispatchToProps = {
//   logout,
// };

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(AppRouter)
// );
