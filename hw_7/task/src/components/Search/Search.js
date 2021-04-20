import React, { Component, Fragment } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';
import ShowPreview from 'components/ShowPreview';

import { getIsSearching, getTvSeries, getError } from '../../reducers/search';

class Search extends Component {
  state = {
    searchText: ''
  };

  handleSearchClick = () => {
    this.props.searchRequest(this.state.searchText);
    this.setState({ searchText: '' });
  };

  handleInputChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleKeyPressed = event => {
    event.key === 'Enter' && this.state.searchText !== ''
      ? this.handleSearchClick()
      : '';
  };

  render() {
    const { isSearching, tvError, tvSeries } = this.props;
    const { searchText } = this.state;
    if (isSearching) return <p>Searching in progress</p>;
    if (tvError) return <p>Error occured: {tvError}, reload the page</p>;

    return (
      <Fragment>
        <div className="search">
          <input
            type="text"
            placeholder="enter name"
            value={searchText}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPressed}
          />
          <button onClick={this.handleSearchClick}>Найти</button>
        </div>
        <div className="result t-search-result">
          <h2>Results:</h2>
          {tvSeries.map(series => (
            <ShowPreview
              key={series.id}
              name={series.name}
              image={series.image && series.image.medium}
              id={series.id}
              summary={series.summary}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSearching: getIsSearching(state),
  tvSeries: getTvSeries(state), //спросить у Валеры
  // tvSeries: state.search.tvSeries,
  error: getError(state)
});

// const mapStateToProps = state => ({
//   isSearching: state.search.isSearching,
// tvSeries: state.search.tvSeries,
//   error: state.search.error
// });

// const mapDispatchToProps = {
//   searchRequest
// };

export default connect(
  mapStateToProps,
  { searchRequest }
)(Search);
