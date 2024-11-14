import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://json-server-movie-review-app.onrender.com/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;//conditional rendering 


  return (
    <div>
    <h2>{movie.title}</h2>
    <p>Details about {movie.title}</p>
  </div>
  )
}

export default MovieDetail;