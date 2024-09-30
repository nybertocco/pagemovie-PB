import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>NycMovies</h1>

      <menu>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/series">
            <li>Séries</li>
          </Link>
          <Link to="/favoritos">
            <li>Favoritos</li>
          </Link>
        </ul>
      </menu>

      <input type="text" placeholder="Buscar" className="search" />
    </div>
  );
}
