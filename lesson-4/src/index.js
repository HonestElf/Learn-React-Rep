import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import { compose, pure, withState } from "recompose";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

//Изучаем HOC(High order components)
//Изучаем библиотеку recompose - набор HOC'ов
// [].map((x)=>x+1); - High order function

//обертка, возвращает переданную компоненту с всеми ее props
//т.к. она наследуется от pureComponent, она не перерендеривается
// если изменяется ее родительская компонента
function pureHOC(WrappedComponent) {
  return class extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

let Title = ({ children, subTitle }) => {
  console.log("Title Called");

  return (
    <h1>
      {children}
      {subTitle && <span>{subTitle}</span>}
    </h1>
  );
};

// Title = compose(pure)(Title);
// Title = compose(pure, withState("counter", "changeCounter"), 0)(Title);

Title = pureHOC(Title); //делаем компоненту pure, теперь рендер не запускается каждый раз

class Comp extends Component {
  static defaultProps = {
    name: "No name",
    data: [],
  };

  render() {
    const { name } = this.props;

    return <div>Hello, {name}!</div>;
  }
}

class App extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    // this.setState({ counter: this.state.counter + 1 });
    this.setState((state) => ({ counter: state.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <Title>Blah-Blah</Title>
        <button onClick={this.handleClick}>Click here</button>
        <p>{counter}</p>
        <Comp />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
