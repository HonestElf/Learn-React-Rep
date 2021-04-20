import logo from "./logo.svg";
import "./App.css";
import { Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./PrivateRouter";
import styled from "styled-components";
//использование styled-components
//даже наведение есть
const Header = styled.header`
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  &:hover {
    color: blue;
  }
`;

const Private = () => <p> This is private page</p>;

class App extends Component {
  state = {
    isAuthorized: false,
    isBlack: false,
  };
  //через интервал меняем параметр
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        isBlack: !this.state.isBlack,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="App">
        <Header isBlack={this.state.isBlack} className="t-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
        <Switch>
          <PrivateRoute path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}
//Это было в свиче вместо PrivateRouter
// {isAuthorized ? (
//   <Route path="/private" component={Private} />
// ) : (
//   <Redirect from="/private" to="/" />
// )}
export default App;
