import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchMovie from "./components/SearchMovie";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]); // to define the movies and setMovies with useState
  const [searchQuery, setSearchQuery] = useState(''); // state for search query

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);                                   // squire blackets to run only one time when mounted
//to Add new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  //to handle search input change
  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <div>
      <Navigation />
      <SearchMovie searchQuery={searchQuery} handleSearch={handleSearch} /> 
      <AddMovie addMovie={addMovie} />      
      <div>
        {filteredMovies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}


export default App;

