import React, { Component } from 'react'
import LocationCard from './LocationCard';
import APIManager from '../../modules/APIManager';

//import the components we will need

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("locations")
      .then((locations) => {
        this.setState({
          locations: locations
        })
      })
  }


  deleteLocation = id => {
    APIManager.delete(id, "locations")
    .then(() => {
      APIManager.getAll("locations")
      .then((newLocations) => {
        this.setState({
            locations: newLocations
        })
      })
    })
  }

  render(){
  
    return(
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard
            key={location.id}
            location={location}
            deleteLocation={this.deleteLocation}
          />
        )}
      </div>
    )
  }
}

export default LocationList