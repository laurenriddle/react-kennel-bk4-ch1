import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h2>Location: <span className="card-locationname">{this.props.locationObject.name}</span></h2>
        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        <Link to={`/locations/${this.props.locationObject.id}`}><button>Details</button></Link>
        <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locationObject.id}/edit`) }}>Edit</button>
</div>
    </div>
    );
  }
}

export default LocationCard;