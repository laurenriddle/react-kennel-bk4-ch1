import React, { Component } from 'react';

class EmployeeCard extends Component {
// this returns the employee card and the data is passed to the employee card through props from employee list 
render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Employee" />
          </picture>
          <h2>Employee Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
   </div>
      </div>
    );
  }
}

export default EmployeeCard;