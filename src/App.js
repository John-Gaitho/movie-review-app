import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchMovie from "./components/SearchMovie";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movies, setMovies] = useState([]); // to define the movies and setMovies with useState
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://json-server-movie-review-app.onrender.com/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []); // squire blackets to run only one time when mounted

  
  const addMovie = (newMovie) => {       //to Add new movie to the list
    setMovies([...movies, newMovie]);
  };

 
  function handleSearch(event) {        //to handle search input change
    setSearchQuery(event.target.value);
  }
  
  const filteredMovies = movies.filter((movie) =>  //to filter movies based on search query
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteMovie = (id) => {
    fetch(`https://json-server-movie-review-app.onrender.com/movies/${id}`, { method: "DELETE" })  //to handle delete & pass it as prop to movielist
    .then(
      (response) => {
        if (response.ok) {    // a boolean property to check if request is a succes
          setMovies(movies.filter((movie) => movie.id !== id));   // filter by id
        }
      }
    );
  };

  return (    // navigation route paths
    <Router>
      <div>
        <Navigation />
        <SearchMovie searchQuery={searchQuery}  handleSearchChange={handleSearch}/>
        <Routes> 
          <Route path="/" element={<MovieList movies={filteredMovies} deleteMovie={deleteMovie} />} />      
          <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
          <Route path="/" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
