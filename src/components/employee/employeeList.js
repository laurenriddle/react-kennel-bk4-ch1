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
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll()
      .then((employees) => {
        this.setState({
          employees: employees
        })
      })
  }

  render() {
    console.log("AnimalList: Render");

    return (
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard key={employee.id} employee={employee} />
        )}
      </div>
    )
  }
}

export default EmployeeList