import Movie from "../components/Movie";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Movies() {
  const { moviesData, isLoading, searchTerm } = useContext(GlobalContext);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-wrap px-24 justify-center items-center mt-8 gap-8">
      {moviesData
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((movie) => (
          <Link key={movie.id} to={`/clicked-movie/${movie.id}`}>
            <Movie movie={movie} />
          </Link>
        ))}
    </div>
  );
}

export default Movies;
