import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Home from './components/Home.js';
import Login from './components/auth/Login.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component = {Home}/>
        <Route path="/login" component = {Login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
