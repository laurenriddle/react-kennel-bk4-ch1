import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    // this returns the location card and the data is passed to the location card through props from location list 
    return (
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h2>Location: <span className="card-locationname">{this.props.location.name}</span></h2>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
  </div>
    </div>
    );
  }
}

export default LocationCard;