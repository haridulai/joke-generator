import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchJoke = async () => {
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Sonny&lastName=Singh`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
