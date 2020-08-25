import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [Nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNayoks(data));
  }, []);


  const [Heros, setHero] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHero(data));
  },[]);
  // const Nayoks = [
  //   { name: "jasim", age: "56" },
  //   { name: "Omar sani", age: "50" },
  //   { name: "Bapparaj", age: "15" },
  //   { name: "Sakib", age: "48" },
  // ];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {Nayoks.map((nk) => (
        <Nayok name={nk.name} age={nk.age} key={nk.id} email={nk.email}></Nayok>
      ))}
      {Heros.map((hr)=> (
          <Hero name ={hr.name}></Hero>
        ) )}
      {/* <Hero></Hero> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
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

function MovieDisplay(props) {
  return <h4>Movies i have acted:{props.movies}</h4>;
}

function Nayok(props) {
  // console.log(props);
  const nayokStyle = {
    border: "2px solid purple",
    margin: "20px",
  };
  return (
    <div style={nayokStyle}>
      <h1> Ami Nayok - {props.name}</h1>
      <h3> I have done 5 movies {props.age || 30} years.</h3>
      <h3> I have a email - {props.email}</h3>
    </div>
  );
}

function Hero(props) {
  const heroStyle = {
    color: "red",
  };
  return (
    <div style={heroStyle}>
      <h2>Hero name: {props.name}</h2>
    </div>
  );
}

export default App;
