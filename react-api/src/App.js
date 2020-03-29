import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Apicall />
    </div>
  );}

export default App;
