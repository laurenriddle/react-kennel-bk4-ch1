import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard'
//import the components we will need

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll()
      .then((employees) => {
        this.setState({
          employees: employees
        })
      })
  }

  deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

  render(){
  
    return(
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee}
          />
        )}
      </div>
    )
  }
}

export default EmployeeList