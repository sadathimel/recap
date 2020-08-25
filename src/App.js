import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Noyoks = [
    { name: "jasim", age: "56" },
    { name: "Omar sani", age: "50" },
    { name: "Bapparaj", age: "15" },
    { name: "Sakib", age:"48"}
  ];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        Noyoks.map(nk => <Noyok name={nk.name} age = {nk.age}></Noyok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = ()=> setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of Movies:{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  );
}

function MovieDisplay(props){
return <h4>Movies i have acted:{props.movies}</h4>
}

function Noyok(props) {
  // console.log(props);
  const noyokStyle = {
    border: "2px solid purple",
    margin: "20px",
  };
  return (
    <div style={noyokStyle}>
      <h1> Ami Noyok - {props.name}</h1>
      <h3> I have done 5 movies {props.age || 30} years.</h3>
    </div>
  );
}

export default App;
