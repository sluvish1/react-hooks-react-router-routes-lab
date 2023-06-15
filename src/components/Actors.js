import React from "react";
import { actors } from "../data";

//console.log(actors)
// const allActor = actors.filter((actor) => {
//  return actor.movies
// })
const styling = {
  color: "hotpink"
}

function Actors() {
  const actorsList = actors.map((actor) => (
      <div key={actor.name}>
        <h2 style={styling}>{actor.name}</h2>
        <ul >
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))

  return (
    <div className="actors">
      <h1 style={styling}>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
