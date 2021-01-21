import React, { useState, useEffect } from "react";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

function MoviesF() {
  const [mainMovies, setMovies] = useState([]);
  const [mainGenres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  // Initialize state
  useEffect(() => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    setMovies(getMovies());
    setGenres(genres);
  },[]);

  // delete a certain movie
  function handleDelete(movie) {
    setMovies((prevMovie) => {
      return prevMovie.filter((m) => m._id !== movie._id);
    });
  }
  // To like or unlike
  function handleLike(movie) {
    console.log("like");
    const movies = [...mainMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    setMovies(movies);
  }

  // When pagination button is pressed, state will be changed
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // To handle genre change from list group
  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };

  // Sorting
  const handleSort = sortColumn => {
    setSortColumn(sortColumn);
  };

  // This function is used to get the data of the page
  const getPagedData = () => {
    // Get data from the state to avoid using the state directly
    // const {
    //   pageSize,
    //   currentPage,
    //   sortColumn,
    //   selectedGenre,
    //   movies: allMovies
    // } = this.state;

    // filter the movies by genre
    const filtered =
      selectedGenre && selectedGenre._id
        ? mainMovies.filter(m => m.genre._id === selectedGenre._id)
        : mainMovies;

    // sort the movies according to the option available in the state
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // paginate the movies according to the option available in the state
    const movies = paginate(sorted, currentPage, pageSize);

    // return movies and their movies
    return { totalCount: filtered.length, data: movies };
  };

  const count = mainMovies.length;

  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  } else {
    
    // Get the movies form getPagedData function which returns filtered, sorted and paginated movies
    const { totalCount, data: movies } = getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={mainGenres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={handleLike}
            onDelete={handleDelete}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MoviesF;
