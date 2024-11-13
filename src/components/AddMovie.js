import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description };

    const configObject = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    };

    fetch("http://localhost:5000/movies", configObject) // to config and send newmovie data to servor
      .then((response) => response.json())
      .then((data) => {
        addMovie(data); // to Update the list with the new movie data from the server
        setTitle(""); // Clear the form after submission
        setDescription("");
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
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
