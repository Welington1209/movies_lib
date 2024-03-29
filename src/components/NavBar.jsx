import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./NavBar.css";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/movies_lib">
          <BiCameraMovie /> <span>MoviesLib</span>
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
