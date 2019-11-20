import React, { Component } from 'react';
import './AnimalDetail.css'
import APIManager from '../../modules/APIManager';

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(this.props.animalId, "animals")
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed
      });
    });
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
        </div>
      </div>
    );
  }
}

export default AnimalDetail;