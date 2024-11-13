import React,{useEffect, useState} from 'react'

const MovieDetail = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/movies/`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, []);

  return (
    <div>{movie.title}</div>
  )
}

export default MovieDetail;