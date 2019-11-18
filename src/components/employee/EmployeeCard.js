import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Employee" />
          </picture>
          <h3>Employee Name: <span className="card-employeename">Jane Doe</span></h3>

        </div>
      </div>
    );
  }
}

export default EmployeeCard;