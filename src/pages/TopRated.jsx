import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../pages/MoviesGrid.css";
import Loader from "../img/loader2.gif";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const TopRated = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const top = data.results;
    console.log(top);
    setTopMovies(top);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}/top_rated?api_key=${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <>
      <h2 id="title">Melhor nota:</h2>
      <div className="Container">
        <div className="movies-container">
          {topMovies.length === 0 && <img src={Loader}></img>}
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default TopRated;
