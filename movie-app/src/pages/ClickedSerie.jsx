import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const API_KEY = "67d11c5721bc08223533ab2c6bcc2373";
const BASE_URL = "https://api.themoviedb.org/3";

function ClickedSerie() {
  const { id } = useParams(); 
  const [serieData, setSerieData] = useState(null);

  useEffect(() => {
    async function getSerieDetails() {
      try {
        const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setSerieData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getSerieDetails();
  }, [id]);

  if (!serieData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="text-white flex px-28 py-4">
      <img
        src={`https://image.tmdb.org/t/p/w500/${serieData.backdrop_path}`}
        className="w-[500px] h-[580px] hover:opacity-80 transition duration-300 ease-in-out"
        alt={serieData.name}
      />
      <div className="flex-col px-6 py-2">
        <div className="flex justify-between">
          <p className="font-bold text-2xl font-serif">{serieData.name}</p>
        </div>
        <div>
          <p className="w-full py-2 font-serif">{serieData.overview}</p>
          <div className="flex items-center text-yellow-500 font-serif">
            <FaStar />
            <span className="pl-1">
              Rating: {serieData.vote_average.toFixed(1)}
            </span>
          </div>
          <Link
            className=" p-2 w-[170px] mt-2 items-center justify-center flex rounded-md font-bold font-serif bg-slate-700 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-center"
            to={serieData.homepage}
          >
            <FaPlay />
            <span className="pl-2">Go To Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClickedSerie;
