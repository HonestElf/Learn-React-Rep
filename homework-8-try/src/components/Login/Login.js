import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authorize, getIsAuthorized } from "../../ducks";

import "./Login.css";

const Login = (props) => {
  const { isAuthorized, authorize } = props;

  const [authToken, handleOnChange] = useState("");

  const handlePressEnter = (key) => {
    if (key === "Enter" && authToken) {
      authorize(authToken);
    }
  };

  const handleSendButtonPress = () => {
    if (authToken) {
      authorize(authToken);
    } else {
      console.log("handleSendButtonPress error");
    }
  };
  if (isAuthorized) {
    return <Redirect to="/users/me" />;
  }

  return (
    <Fragment>
      <div className="login__wrap">
        <div className="login__form">
          <p>
            Получить токен нужно на своей странице github. Перейдите по{" "}
            <a
              href="https://github.com/settings/tokens"
              target="_blank"
              rel="noopener noreferrer"
            >
              адресу
            </a>{" "}
            и создайте себе токен. Запишите куда нибудь токен, так как после
            создания доступ к нему будет только один раз.
          </p>
          <input
            className="login__form-input"
            placeholder="auth_token"
            value={authToken}
            onKeyPress={(event) => handlePressEnter(event.key)}
            onChange={(event) => handleOnChange(event.target.value)}
            autoFocus={true}
          />
          <button
            className="login__form-button"
            onClick={handleSendButtonPress}
          >
            Send Token
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: getIsAuthorized(state),
  };
};

const mapDispatchToProps = {
  authorize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import React, { Component} from "react";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { authorize, getIsAuthorized } from "../../ducks";

// import "./Login.css";

// class Login extends Component {
//   state = {
//     authToken: "",
//   };

//   handleOnChange = (e) => {
//     this.setState({
//       authToken: e.target.value,
//     });
//   };

//   handlePressEnter = (e) => {
//     const { authorize } = this.props;

//     e.key === "Enter" && e.target.value && authorize(this.state.authToken);
//   };
//   handleSendButtonPress = (e) => {
//     const { authorize } = this.props;
//     if (this.state.authToken) {
//       authorize(this.state.authToken);
//     }
//   };

//   render() {
//     const { isAuthorized } = this.props;

//     if (isAuthorized) {
//       return <Redirect to="/users/me" />;
//     }

//     return (
//       <div className="login__wrap">
//         <div className="login__form">
//           <p>
//             Получить токен нужно на своей странице github. Перейдите по{" "}
//             <a
//               href="https://github.com/settings/tokens"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               адресу
//             </a>{" "}
//             и создайте себе токен. Запишите куда нибудь токен, так как после
//             создания доступ к нему будет только один раз.
//           </p>
//           <input
//             className="login__form-input"
//             placeholder="auth_token"
//             value={this.state.authToken}
//             onKeyPress={this.handlePressEnter}
//             onChange={this.handleOnChange}
//             autoFocus={true}
//           />
//           <button
//             className="login__form-button"
//             onClick={this.handleSendButtonPress}
//           >
//             Send Token
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthorized: getIsAuthorized(state),
//   };
// };

// const mapDispatchToProps = {
//   authorize,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
