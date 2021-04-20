import React, { Fragment, PureComponent } from "react";

class Input extends PureComponent {
  render() {
    const { input, meta } = this.props;
    return (
      <Fragment>
        {input.name}
        <br />
        <input {...input} />
        {!meta.active && meta.error && <p>{meta.error}</p>}
      </Fragment>
    );
  }
}

export default Input;
