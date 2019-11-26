import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import APIManager from '../../modules/APIManager'

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: []
  }

  componentDidMount() {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
      .then((APIResult) => {
        if (Object.keys(APIResult).length === 0) {
          this.props.history.push("/employee")
          window.alert('The employee you were trying to access does not exists.')
        } else {
          this.setState({
            employee: APIResult,
            animals: APIResult.animals,
          })
        }
      })
  }

  deleteEmployee = id => {
    APIManager.delete(id, "animals")
      .then(() => {
        EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
          .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
          })
      })
  }

  render() {
    return (
      <div className="card">
        <p>Employee: {this.state.employee.name}</p>
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            {...this.props}
            deleteEmployee={this.deleteEmployee}
          />
        )}
      </div>
    )
  }
}

export default EmployeeWithAnimals;