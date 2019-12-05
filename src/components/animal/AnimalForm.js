import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './AnimalForm.css'

let newImage = ""
class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        img: "",
        loadingStatus: false,
    };
    
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    
    /*  Local method for validation, set loadingStatus, create animal object, invoke the APIManager post method, and redirect to the full animal list
    */
   openWidget() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'dkjfqmbsu',
      uploadPreset: 'tzfrbmjg'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        console.log(result.info.url)
        newImage = result.info.url
        console.log(newImage)
        document.querySelector(".success").innerHTML += `<p>Upload Successful</p>`
      }
    }
    )
    widget.open();
console.log("new image", newImage)
  }
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            console.log("ni",newImage)
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: 1,
                img: newImage
            };

            // Create the animal and redirect user to animal list
            console.log("Animal", animal)
            APIManager.post("animals", animal)
                .then(() => this.props.history.push("/animals"));
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
                                id="animalName"
                                placeholder="Animal name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                            <div className="align-left">
                            <button type="button" id="upload_widget" className="cloudinary-button" onClick={this.openWidget}>Upload files</button>
                            <div className="success"></div>
                            </div>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
                     
            </>
        )
    }
}

export default AnimalForm