import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const API_KEY = "67d11c5721bc08223533ab2c6bcc2373";
const BASE_URL = "https://api.themoviedb.org/3";
function ClickedMovie() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovieData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="text-white flex  px-28 py-4">
          <img
            className="w-[500px] h-[580px] hover:opacity-80 transition duration-300 ease-in-out"
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
            alt={movieData.title}
          />

          <div className=" px-6 py-2">
            <p className="font-bold text-2xl font-serif">{movieData.title}</p>

            <div>
              <p className="py-2 font-serif">{movieData.overview}</p>
              <div className="flex  items-center text-yellow-500 font-serif">
                <FaStar />
                <span className="pl-1">
                  Rating: {movieData.vote_average.toFixed(1)}
                </span>
              </div>
              <Link
                className=" p-2 w-[170px] mt-2 items-center justify-center flex rounded-md font-bold font-serif bg-slate-700 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-center"
                to={movieData.homepage}
              >
                <FaPlay />
                <span className="pl-2">Go To Movie</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClickedMovie;
