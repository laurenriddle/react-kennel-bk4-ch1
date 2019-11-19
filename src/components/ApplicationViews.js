import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />

        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
          
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
          
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
          
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews