import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class LocationDetail extends Component {

  state = {
      name: "",
      loadingStatus: true,
  }

  componentDidMount(){
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(this.props.locationId, "locations")
    .then((location) => {
      this.setState({
        name: location.name,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    APIManager.delete(this.props.locationId, "locations")
      .then(() => this.props.history.push("/location"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.png')} alt="Location" />
          </picture>
          <h2>Location: <span className="card-locationname">{this.state.name}</span></h2>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
      </div>
    );
  }
}

export default LocationDetail;