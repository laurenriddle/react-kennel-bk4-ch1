import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import LocationEditForm from "./location/LocationEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import LocationWithEmployees from "./location/LocationWithEmployees"



class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false

  render() {
    return (
      <React.Fragment>
        <Route path="/login" render={(props) => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          console.log("props from react-router-dom", props)
          console.log("props from this component", this.props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route exact path="/employee" render={(props) => {

          return <EmployeeList {...props} />

        }} />
        <Route exact path="/location" render={(props) => {
            return <LocationList {...props} />
        }} />
        <Route exact path="/locations/:locationId(\d+)/detail" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationWithEmployees locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/owner" render={(props) => {
          return <OwnerList {...props} />

        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationEditForm {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews


