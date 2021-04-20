import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "./actions";

import { getError, getIsLoading, getImages, getIsLoaded } from "./reducers";
class App extends Component {
  constructor(props) {
    super(props);

    const { fetchRequest, isLoading, isLoaded } = this.props;
    if (!isLoading && !isLoaded) fetchRequest();
  }
  render() {
    const { isLoading, images, error } = this.props;

    if (isLoading) return <p> Загрузка данных</p>;
    if (error) return <p>{error}</p>;

    console.log("Images: ", images);

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
            Learn React {this.props.var}
          </a>
          {images.map((src) => (
            <img key={src} alt="firefly" src={src} />
          ))}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: getImages(state),
  isLoading: getIsLoading(state),
  isLoaded: getIsLoaded(state),
  error: getError(state),
});

// const mapStateToProps = (state) => ({
//   images: state.images,
//   isLoading: state.isLoading,
//   error: state.error,
// });

export default connect(mapStateToProps, { fetchRequest })(App);
