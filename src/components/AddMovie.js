
import React, { useState } from "react";


function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, image };

    const configObject = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    };

    fetch("https://json-server-movie-review-app.onrender.com", configObject) // to config and send newmovie data to server
      .then((response) => response.json())
      .then((data) => {
        addMovie(data); // to Update the list with the new movie data from the server
        setTitle(""); 
        setDescription("");
        setImage("");   // to clear the image after submission
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Movie Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="URL"
        placeholder="Movie  image..."
        onChange={ (e) => setImage (e.target.value)}
      />
      <button type="submit">ADD MOVIE </button>
    </form>
  );
}

export default AddMovie;
