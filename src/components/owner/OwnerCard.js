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
         <h2>Owner Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
         <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
      </div>
     </div>
    );
  }
}

export default OwnerCard;