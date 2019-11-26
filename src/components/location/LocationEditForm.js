import React, { Component } from "react"
import APIManager from "../../modules/APIManager";

class LocationEditForm extends Component {
    //set the initial state
    state = {
      locationName: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.locationName,
      };

      APIManager.update(editedLocation, "locations")
      .then(() => this.props.history.push("/location"))
    }

    componentDidMount() {
      APIManager.get(this.props.match.params.locationId, "locations")
      .then(location => {
        if (Object.keys(location).length === 0) {
          this.props.history.push("/location")
          window.alert('The location you were trying to access does not exists.')
      } else {
          this.setState({
            locationName: location.name,
            loadingStatus: false,
          });
        }
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm