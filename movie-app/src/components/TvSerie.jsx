import { useState } from "react";
import { FaStar } from "react-icons/fa";

function TvSerie({ serie }) {
  const [isHovered, setIsHovered] = useState(false);
  const posterUrl = `https://image.tmdb.org/t/p/w500/${serie.poster_path}`;
  return (
    <div
      className=" w-64 h-72 relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="h-full w-full  transition-all duration-400  hover:opacity-30"
        src={posterUrl}
        alt={serie.name}
      />
      {isHovered && (
        <div className=" flex justify-between items-center border-b-2 border-red-800 px-3 absolute bottom-0 left-0 w-full text-center py-2 tracking-wider italic  bg-sky-950">
          <p className="text-white">{serie.name}</p>
          <p className="text-yellow-400 text-sm font-semibold flex items-center gap-1">
            <FaStar />
            <span> {serie.vote_average.toFixed(1)}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default TvSerie;
