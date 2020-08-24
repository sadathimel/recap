import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Noyoks = ['Josim', 'Depjol', 'BappaRaj']
  return (
    <div className="App">
      <Noyok name={Noyoks[1]} age={56}></Noyok>
      <Noyok name={Noyoks[0]}></Noyok>
      <Noyok name={Noyoks[2]}></Noyok>
      <Noyok name="Shakib khan"></Noyok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Noyok(props){
  console.log(props)
  const noyokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return(
    <div style={noyokStyle}>
      <h1> Ami Noyok - {props.name}</h1>
  <h3> I have done 5 movies {props.age || 30} years.</h3>
    </div>
  )
}

export default App;
