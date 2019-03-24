import React, { Component } from 'react';
import Home from "./Components/home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Home/>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
