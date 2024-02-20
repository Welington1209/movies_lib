import { useState, useEffect } from "react";

import "./Movie.css";
import NowPlayingCard from "../components/NowPlayingCard";

import Loader from "../img/loader2.gif";
import Aside from "../components/Aside";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const moviesUrl = `${moviesURL}/now_playing?api_key=${apiKey}&language=pt-BR`;
    getMovies(moviesUrl);
  }, []);

  return (
    
      <div className="Container">
        <Aside />
        <div className="movies-container">
          {movies.length === 0 && <img src={Loader}></img>}
          {movies.map((movie) => (
            <NowPlayingCard key={Math.random()} movie={movie} />
          ))}
        </div>
      </div>
    
  );
};

export default HomePage;
