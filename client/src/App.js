import {React, useState, useEffect} from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Steve from "./components/Steve"

function App() {


  return (
    <BrowserRouter>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/stevebuschemi" component={Steve}/>
    </BrowserRouter>
  );
}

export default App;
