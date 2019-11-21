import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager';

class AnimalList extends Component {
  //define what this component needs to render
  // this is the initial setting of state
  state = {
    animals: []
    }

  componentDidMount() {
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAllWithExpand("animals", "employee")
      .then((animals) => {
        // change the current state after get call
        this.setState({
          animals: animals,
        })
      })
  }

  deleteAnimal = id => {
    // invoke the delete funtion for the animal card
    APIManager.delete(id, "animals")
    .then(() => {
      // get all animals, set the state equal to the new array of animals, and the page will automatically re-render
      APIManager.getAll("animals")
      .then((newAnimals) => {
        this.setState({
            animals: newAnimals
        })
      })
    })
  }

  render(){
  
    return(
      // return the animal card and pass the state and deleteAnimal function through props to the card
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
          />
        )}
      </div>
    )
  }
}

export default AnimalList