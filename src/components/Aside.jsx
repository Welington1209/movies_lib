import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdAssessment } from "react-icons/md";

import "./Aside.css";

const Aside = () => {
  return (
    <aside>
      <ul>
        <li>
          <span>
            <FaStar />
          </span>
          <Link to="/popular_movies">Populares </Link>
          <span>
            <FaStar />
          </span>
        </li>
        <li>
          <span>
            <MdOutlineRocketLaunch />
          </span>
          <Link to="/now_playing">Lançamentos </Link>
          <span>
            <MdOutlineRocketLaunch />
          </span>
        </li>
        <li>
          <span>
            <MdAssessment />
          </span>
          <Link to="/top_rated">Melhor nota</Link>
          <span>
            <MdAssessment />
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
