import {React, useState, useEffect} from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Steve from "./components/Steve"

function App() {


  return (
    <BrowserRouter>
      <Route exact path = "/home" component={Home}/>
      <Route exact = "/stevebuschemi" component={Steve}/>
    </BrowserRouter>
  );
}

export default App;
