import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;
    return (
      <div className="tvSeries__preview">
        <div>
          <Link to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          {image && <img src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
