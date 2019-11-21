import React, { Component } from 'react'
import OwnerCard from './OwnerCard';
import APIManager from '../../modules/APIManager';


//import the components we will need

class OwnerList extends Component {
  //define what this component needs to render
  // set initial state
  state = {
    owners: [],
  }

  componentDidMount() {
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("owners")
      .then((owners) => {
        // change state
        this.setState({
          owners: owners
        })
      })
  }

  deleteOwner = id => {
 // invoke the delete funtion for the owner card
    APIManager.delete(id, "owners")
    .then(() => {
    // get all owners, set the state equal to the new array of owners, and the page will automatically re-render
      APIManager.getAll("owners")
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
  }

  render(){
  
    return(
      // return the owner card and pass the state and deleteOwner function through props to the card
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        )}
      </div>
    )
  }
}

export default OwnerList