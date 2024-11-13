import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchMovie from "./components/SearchMovie";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]); // to define the movies and setMovies with useState
  
  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);                                   // squire blackets to run only one time when mounted

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  

  return (
    <div>
      <Navigation />
      <SearchMovie />
      <AddMovie addMovie={addMovie} />      {/* to pass addMovie  */}

      <div>
        {movies.map(
          (
            movie // to display the fetched movies
          ) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
