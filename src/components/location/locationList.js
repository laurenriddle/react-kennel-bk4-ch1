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

  render() {

    return (
      <>
        {/*add this button above your display of animal cards*/}
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/locations/new") }}>
            Add Location
       </button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
            />
          )}
        </div>
      </>
    )
  }
}

export default LocationList