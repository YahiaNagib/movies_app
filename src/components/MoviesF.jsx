import React, { useState } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";

function MoviesF() {
  const [main_movies, setMovies] = useState(getMovies());

  function handleDelete(movie) {
    setMovies((prevMovie) => {
      return prevMovie.filter((m) => m._id !== movie._id);
    });
  }

  function handleLike(movie) {
    const movies = [...main_movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    setMovies(movies);
  }

  const count = main_movies.length;

  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  } else {
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {main_movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesF;
