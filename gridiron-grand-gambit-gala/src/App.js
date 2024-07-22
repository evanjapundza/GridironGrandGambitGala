import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Routes from "./Routes.js"

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
