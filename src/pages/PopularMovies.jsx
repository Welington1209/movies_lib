import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../pages/MoviesGrid.css";
import Loader from "../img/loader2.gif";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const top = data.results;
    console.log(top);
    setPopularMovies(top);
  };

  useEffect(() => {
    const popularMoviesUrl = `${moviesURL}/popular?api_key=${apiKey}&language=pt-BR`;

    getPopularMovies(popularMoviesUrl);
  }, []);

  return (
    <>
      <h2 id="title">Mais populares:</h2>
      <div className="Container">
        <div className="movies-container">
          {popularMovies.length === 0 && <img src={Loader}></img>}
          {popularMovies.length > 0 &&
            popularMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;