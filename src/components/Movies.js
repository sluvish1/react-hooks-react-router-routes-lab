import React from "react";
import { movies } from "../data";

const styling = {
  color: "hotpink"
}

const Movies = () => {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2 style={styling}>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1 style={styling}>Movies Page</h1>
      {movieItems}
    </div>
  );
};

export default Movies;



// <div>
//   <h1>Movie Page</h1>
//   {movies.map((movie, movieIndex) => (
//     <div key={movieIndex}>
//       <h2 style={styling}>Title: {movie.title}</h2>
//       <p>Time: {movie.time}</p>
//       <ul>
//         {movie.genres.map((genre, genreIndex) => (
//           <li key={genreIndex}>{genre}</li>
//         ))}
//       </ul>
//     </div>
//   ))}
// </div>

/*we're referncing our movies array and mapping over it so we create a new array based on the movie array.
      Next we're specifing which index we want to work with. 
      Next we're saying based on the index that we're working with get that movie title from our movies array. 
      Next we're saying based on the index that we're working with get that movie time 
      Finally we have to map over the array thats inside of our object to get the genre
      */
