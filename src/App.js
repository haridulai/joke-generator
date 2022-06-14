import { useEffect, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  // Custom Hook
  const joke = useRandomJoke();

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
