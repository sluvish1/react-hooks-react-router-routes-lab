import React from "react";
import { directors, movies } from "../data";

//console.log(directors);
const stylying = {
  color: "hotpink",
};

function Directors() {
  const directorsList = directors.map((director) => (
      <div key={director.name}>
      <h2 style={stylying}>Name: {director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      </div> 
  ))

  return (
    <div className="directors">
      <h1 style={stylying}>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
