import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>Employee Name: <span className="card-employeename">Jane Doe</span></p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;