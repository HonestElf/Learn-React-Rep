import React, { Component, Fragment } from "react";

import { Link, Route, Switch } from "react-router-dom";

const Topic = (props) => {
  console.log(props);
  return (
    <Fragment>
      <p> Topic {props.match.params.id} </p>
      <Switch>
        <Route
          path="/Topics/:id/secret"
          render={() => "This is a secret place!"}
        />
      </Switch>
    </Fragment>
  );
};

export default class extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/1`}> 1</Link>
        <Link to={`${this.props.match.url}/2`}> 2</Link>
        <Link to={`${this.props.match.url}/3`}> 3</Link>

        <Route path={`${this.props.match.url}/:id`} component={Topic} />
      </div>
    );
  }
}
