import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager';
import OwnerCard from './OwnerCard';


//import the components we will need

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    OwnerManager.getAll()
      .then((owners) => {
        this.setState({
          owners: owners
        })
      })
  }

  deleteOwner = id => {
    OwnerManager.delete(id)
    .then(() => {
      OwnerManager.getAll()
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
  }

  render(){
  
    return(
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