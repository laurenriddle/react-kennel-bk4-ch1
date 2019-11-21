import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the APIManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "") {
            window.alert("Please input an employee name");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
        };

        // Create the animal and redirect user to animal list
        APIManager.post("owners", owner)
            .then(() => this.props.history.push("/owner"));
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
                            id="ownerName"
                            placeholder="Owner name"
                        />
                        <label htmlFor="ownerName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
}

export default OwnerForm