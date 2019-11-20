import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class LocationDetail extends Component {

  state = {
      name: ""
  }

  componentDidMount(){
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(this.props.locationId, "locations")
    .then((location) => {
      this.setState({
        name: location.name,
        breed: location.breed
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.png')} alt="Location" />
          </picture>
          <h2>Location: <span className="card-locationname">{this.state.name}</span></h2>
        </div>
      </div>
    );
  }
}

export default LocationDetail;