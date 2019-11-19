import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager';
import LocationCard from './LocationCard';

//import the components we will need

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    LocationManager.getAll()
      .then((locations) => {
        this.setState({
          locations: locations
        })
      })
  }

  render() {

    return (
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard key={location.id} location={location} />
        )}
      </div>
    )
  }
}

export default LocationList