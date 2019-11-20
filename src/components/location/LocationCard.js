import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h2>Location: <span className="card-locationname">{this.props.location.name}</span></h2>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
      </div>
    </div>
    );
  }
}

export default LocationCard;