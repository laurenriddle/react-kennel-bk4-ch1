import React, { Component } from 'react';
import "./owner.css"

class OwnerCard extends Component {
  render() {
    return (
       <div className="card">
       <div className="card-content">
         <picture>
           <img src={require('./owner.jpg')} alt="Owner" />
         </picture>
         <h3>Owner Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
       </div>
     </div>
    );
  }
}

export default OwnerCard;