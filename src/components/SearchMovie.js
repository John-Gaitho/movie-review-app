
import React, {useState} from "react";

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      
    <input type="text" placeholder="Search movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    <button onClick={() => console.log(searchTerm)}>Search</button>
    </div>
  );
};

export default SearchMovie;

