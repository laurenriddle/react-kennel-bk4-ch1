import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          console.log("props from react-router-dom", props)
          console.log("props from this component", this.props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route exact path="/employee" render={(props) => {
          return <EmployeeList {...props}/>

        }} />
        <Route exact path="/location" render={(props) => {
          return <LocationList {...props}/>

        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/owner" render={(props) => {
          return <OwnerList {...props}/>
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
         <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews