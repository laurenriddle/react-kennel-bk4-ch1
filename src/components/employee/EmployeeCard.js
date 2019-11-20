import React, { Component } from 'react';

class EmployeeCard extends Component {
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