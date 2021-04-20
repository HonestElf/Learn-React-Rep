import React, { Component, Fragment } from 'react';
import { showRequest } from '../../actions/show';
import { connect } from 'react-redux';
class ShowPage extends Component {
  constructor(props) {
    super(props);

    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  }

  render() {
    const { entity } = this.props;

    if (!entity.name) {
      return null;
    }

    return (
      <Fragment>
        <h3>{entity.name} </h3>
        {entity.image && <img src={entity.image.medium} alt={entity.name} />}
        <div dangerouslySetInnerHTML={{ __html: entity.summary }} />
        <div className="actors">
          {entity._embedded.cast.map(({ person }, index) => (
            <div key={index} className="t-person">
              <p>{person.name}</p>
              {person.image && (
                <img src={person.image.medium} alt={person.name} />
              )}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isShowing: state.shows.isShowing,
  entity: state.shows.entity
});

export default connect(
  mapStateToProps,
  { showRequest }
)(ShowPage);
