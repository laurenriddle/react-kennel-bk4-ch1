import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

// this builds on component that holds the navbar and application views components. This will be called in index.js on initial page loading.
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