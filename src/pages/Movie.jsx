import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendar2Date,
  BsQuestionSquare,
  BsHandThumbsUp,
} from "react-icons/bs";

const imageURL = import.meta.env.VITE_IMG;

import MovieCard from "../components/MovieCard";

import "./Movie.css";
import { FaStar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}$</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            {movie.genres.length > 1 ? (
              <h3>
                {" "}
                <BsQuestionSquare /> Gêneros:
              </h3>
            ) : (
              <h3>
                <BsQuestionSquare /> Gênero:
              </h3>
            )}
            {movie.genres.map((g) => (
              <p key={g.id}>{g.name}</p>
            ))}
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info">
            <h3>
              <FaStar /> Popularidade:
            </h3>
            <p>{movie.popularity}</p>
          </div>
          <div className="info">
            <h3>
              <BsHandThumbsUp /> Nùmero de avaliações:
            </h3>
            <p>{movie.vote_count}</p>
          </div>
          <div className="info">
            <h3>
              <BsCalendar2Date /> Data de lançamento:
            </h3>
            <p>{movie.release_date}</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
          <div className="backdrop">
            <img src={imageURL + movie.backdrop_path} alt={movie.title} />
            </div>
        </>
      )}
    </div>
  );
};

export default Movie;
