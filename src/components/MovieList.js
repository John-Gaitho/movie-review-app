import React from "react";

function MovieList({ movies, deleteMovie }) {    // props
  return (
    <div>
      <h1>DISCOVER THE  BEST MOVIES OF ALL TIMES</h1>
      {movies.length === 0 ? (   // to check if no movies found and return a message
        <p>No movies found!</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              {movie.image && (
                <img src={movie.image} alt={`${movie.title} poster`} />  //template literal
              )}
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p>
                <strong>Description:</strong> {movie.description}
              </p>
              <p>
                <strong>Rating:</strong> {movie.rating}
              </p>
              <p>
                <strong>Release Year:</strong> {movie.releaseYear}
              </p>
              <button onClick={() => deleteMovie(movie.id)}>Delete</button> {/* Delete Button */}

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
