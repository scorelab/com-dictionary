import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={HomePage} />
    </Router>
  );
}

export default App;
