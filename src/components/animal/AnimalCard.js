import React, { Component } from 'react';
import './animal.css'
import { Link } from "react-router-dom";

class AnimalCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
          <p>Breed: {this.props.animal.breed}</p>
          {/* <p>Employee: {this.props.animal.employee.name}</p> */}
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;

