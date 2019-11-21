import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class LocationForm extends Component {
    state = {
        locationName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the APIManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "") {
            window.alert("Please input an employee name");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
        };

        // Create the animal and redirect user to animal list
        APIManager.post("locations", location)
            .then(() => this.props.history.push("/location"));
    }
};

render() {

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="locationName"
                            placeholder="Location name"
                        />
                        <label htmlFor="locationName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
}

export default LocationForm