import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>Owner Name: <span className="card-ownername">John Doe</span></p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;