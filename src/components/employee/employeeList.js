import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager';
//import the components we will need

class EmployeeList extends Component {
  //define what this component needs to render
  // set initial state
  state = {
    employees: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("employees")
      .then((employees) => {
        // change state
        this.setState({
          employees: employees
        })
      })
  }

  deleteEmployee = id => {
    // delete a single employee
    APIManager.delete(id, "employees")
    .then(() => {
    // get all employees, set the state equal to the new array of employees, and the page will automatically re-render
      APIManager.getAll("employees")
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

  render(){
  
    return(
     // return the employee card and pass the state and deleteEmployee function through props to the card
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