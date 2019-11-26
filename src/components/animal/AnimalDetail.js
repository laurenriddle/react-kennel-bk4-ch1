import React, { Component } from 'react';
import './AnimalDetail.css'
import APIManager from '../../modules/APIManager'


class AnimalDetail extends Component {

  state = {
    name: "",
    breed: "",
    employee: "",
    loadingStatus: true,
  }

  componentDidMount() {
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to that data; put it into state
    APIManager.get(this.props.animalId, "animals", "employee")
      .then((animal) => {
        this.setState({
          name: animal.name,
          breed: animal.breed,
          employee: animal.employee.name,
          loadingStatus: false
        });
      });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    APIManager.delete(this.props.animalId, "animals")
      .then(() => this.props.history.push("/animals"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
          <p>Breed: {this.state.breed}</p>
          <p>Employee: {this.state.employee}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;