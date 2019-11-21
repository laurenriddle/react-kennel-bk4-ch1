import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Kennel from './components/Kennel';
import { BrowserRouter as Router } from "react-router-dom"

// this renders the initial application view of the navbar and the home page
ReactDOM.render(
  <Router>
    <Kennel />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
