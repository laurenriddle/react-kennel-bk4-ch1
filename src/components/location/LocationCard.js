import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./nashville.jpg')} alt="Nashville" />
        </picture>
        <h3>Location: <span className="card-employeename">Nashville</span></h3>
      </div>
    </div>
    );
  }
}

export default LocationCard;