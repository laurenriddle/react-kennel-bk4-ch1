import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>Location: <span className="card-locationname">Nashville</span></p>
        </div>
      </div>
    );
  }
}

export default LocationCard;