import React, { Component } from 'react';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) return <p>This is PrivateRoute page</p>;
    else return <p>This is not a PrivateRoute page</p>;
  }
}

export default PrivateRoute;
