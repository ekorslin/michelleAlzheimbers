// import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component {

  openNav = (event) => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = (event) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  render () {
    return (

  <nav> 
  </nav>
);
        }}
export default Navbar;
