import { Route, Redirect } from "react-router-dom"
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
import Login from './auth/Login'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import LocationEditForm from "./location/LocationEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"



class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
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
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/location" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }

        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/owner" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
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