import React, { Component } from 'react'
import AnimalCard from './animal/AnimalCard'
import './Kennel.css'
import OwnerCard from './owner/OwnerCard';
import EmployeeCard from './employee/EmployeeCard';
import LocationCard from './location/LocationCard';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

class Kennel extends Component {
  render() {
    return (
      <>
      <NavBar />
      <ApplicationViews />
    </>
    );
  }
}

export default Kennel;