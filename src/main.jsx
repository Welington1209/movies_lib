import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import TopRated from "./pages/TopRated.jsx";
import NowPlaying from "./pages/NowPlaying.jsx";
import PopularMovies from "./pages/PopularMovies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/movies_lib" element={<Home />} />

          <Route path="movie/:id" element={<Movie />} />

          <Route path="search" element={<Search />} />

          <Route path="/top_rated" element={<TopRated />} />

          <Route path="/now_playing" element={<NowPlaying />} />

          <Route path="/popular_movies" element={<PopularMovies />} />
          </Route>
          
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
