import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/add">Add New Movie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
