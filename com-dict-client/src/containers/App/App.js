import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css'


import HomePage from "../home/home"

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={HomePage} />
      </Router>

    );
  }
}

export default App;
