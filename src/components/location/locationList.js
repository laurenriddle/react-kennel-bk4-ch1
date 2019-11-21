import React, { Component } from 'react'
import LocationCard from './LocationCard';
import APIManager from '../../modules/APIManager';

//import the components we will need

class LocationList extends Component {
 //define what this component needs to render
// this is the initial setting of state
  state = {
    locations: [],
  }

  componentDidMount() {
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("locations")
      .then((locations) => {
        // change state
        this.setState({
          locations: locations
        })
      })
  }


  deleteLocation = id => {
    // invoke the delete funtion for the location card
    APIManager.delete(id, "locations")
    .then(() => {
    // get all locations, set the state equal to the new array of locations, and the page will automatically re-render
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
    // return the location card and pass the state and deleteLocation function through props to the card
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