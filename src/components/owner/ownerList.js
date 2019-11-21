import React, { Component } from 'react'
import OwnerCard from './OwnerCard';
import APIManager from '../../modules/APIManager';


//import the components we will need

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("owners")
      .then((owners) => {
        this.setState({
          owners: owners
        })
      })
  }

  deleteOwner = id => {
    APIManager.delete(id, "owners")
    .then(() => {
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
      <>
        {/*add this button above your display of animal cards*/}
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/owners/new") }}>
            Add Owner
       </button>
        </section>
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        )}
      </div>
      </>
    )
  }
}

export default OwnerList