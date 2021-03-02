import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);

    const { fetchRequest, isLoading } = this.props;
    if (!isLoading) fetchRequest();
  }
  render() {
    const { isLoading, images, error } = this.props;
    if (isLoading) return <p> Загрузка данных</p>;
    if (error) return <p>{error}</p>;

    console.log(images);
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
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchRequest })(App);
