import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h3>Location: <span className="card-locationname">{this.props.location.name}</span></h3>
      </div>
    </div>
    );
  }
}

export default LocationCard;