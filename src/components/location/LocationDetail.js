import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class LocationDetail extends Component {
// initial setting of state
  state = {
      name: "",
      loadingStatus: true,
  }

  componentDidMount(){
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(this.props.locationId, "locations")
    .then((location) => {
    // changes the state
      this.setState({
        name: location.name,
        breed: location.breed,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in APIManager and re-direct to the location list.
    this.setState({ loadingStatus: true })
    APIManager.delete(this.props.locationId, "locations")
      .then(() => this.props.history.push("/location"))
  }

  render() {
    return (
    // this card is rendered when location detail is clicked. The data is passed to this card from the state set on this page
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