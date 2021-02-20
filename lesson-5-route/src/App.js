import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";

import { Route, Link, Redirect, Switch } from "react-router-dom";

import Home from "./Home.js";

import About from "./About";

import Topics from "./Topics";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      foo: "bar",
      isAuthorized: true,
    };
  }
  render() {
    const { isAuthorized } = this.state;
    return (
      <div className="App">
        <header className="App-header">
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
            <Route exact path="/" render={() => ", this is homePage"}></Route>
          </a>
          <hr></hr>
          <Link to="/"> Home</Link>
          <Link to="/About"> About</Link>
          <Link to="/Topics"> Topics</Link>
          <Switch>
            {/*выводит только потомка с совпадающим url  */}
            {/*<Route path="/" component={Home} /> - выведет Home и другой тег*/}
            {/* <Route path="/home" component={Home} /> */}
            {/*<Route exact path="/" component={Home} />  добавили exact*/}
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Login" render={() => <p>Login page</p>} />
            {isAuthorized ? (
              <Route path="/Topics" component={Topics} />
            ) : (
              <Redirect to="/Login" />
            )}

            <Redirect from="*" to="/" />
            {/*<Route from="*" render={() => "404"} /> рендер 404 страницы  */}
            {/*<Redirect path="/landing" component={LandingPageLayout} />*/}
            {/*<Redirect path="/login" component={LoginLayout} />*/}
            {/*<Redirect exact path="/" component={MainLayout} />*/}
            {/*<Redirect from="*" component={Page404Layout} />*/}
            {/*редирект на домашнюю, если до этого не было совпадений*/}
          </Switch>
        </header>
      </div>
    );
  }
}

const LandingPageLayout = () => {
  return (
    <Fragment>
      <header />
      <main>
        <Switch>
          <Route />
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
