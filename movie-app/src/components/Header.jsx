import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Logo from "../assets/logo-film.png";

function Header() {
  const { searchTerm, setSearchTerm } = useContext(GlobalContext);

  return (
    <nav className="flex justify-around bg-blue-950 px-14 py-1 text-white text-center items-center">
      <div className="font-bold text-lg text-center">
        <NavLink to="/">
          <img className="w-48" src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="space-x-10 text-lg">
        <NavLink
          className="border-b-2 pb-1 hover:text-red-800 hover:border-red-800 transition-all duration-400 ease-in-out"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="border-b-2  pb-1 hover:text-red-800 hover:border-red-800 transition-all duration-400 ease-in-out "
          to="/movies"
        >
          MOVIES
        </NavLink>
        <NavLink
          className="border-b-2 pb-1  hover:text-red-800 hover:border-red-800 transition-all duration-400 ease-in-out"
          to="/tv-series"
        >
          TV SERIES
        </NavLink>
      </div>
      <div>
        <input
          className="py-1.5 px-6 rounded-sm text-slate-700 font-semibold bg-sky-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-400 ease-in-out placeholder:text-slate-700 placeholder:text-sm placeholder:font-semibold"
          type="text"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Header;
