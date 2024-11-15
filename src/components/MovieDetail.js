import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://json-server-movie-review-app.onrender.com/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;  //conditional rendering to check if movies found


  return (
    <div>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <p>{movie.genre}</p>
    <p>{movie.rating}</p>
    <p>{movie.releaseYear}</p>
  </div>
  )
}

export default MovieDetail;