import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import APIManager from '../../modules/APIManager'

class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: []
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
        })
    }

    deleteAnimal = id => {
        APIManager.delete(id, "animals")
          .then(() => {
            APIManager.getAllWithExpand("animals", "employee")
              .then((newAnimals) => {
                this.setState({
                  animals: newAnimals
                })
              })
          })
      }

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                {...this.props}
                deleteAnimal={this.deleteAnimal}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;