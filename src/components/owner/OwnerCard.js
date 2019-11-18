import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
       <div className="card">
       <div className="card-content">
         <picture>
           <img src={require('./owner.png')} alt="Owner" />
         </picture>
         <h3>Owner Name: <span className="card-employeename">John Doe</span></h3>
       </div>
     </div>
    );
  }
}

export default OwnerCard;