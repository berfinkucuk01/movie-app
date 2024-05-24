// TvSeries.js

import Loader from "../components/Loader";
import TvSerie from "../components/TvSerie";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function TvSeries() {
  const { seriesData, isLoading, searchTerm } = useContext(GlobalContext);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-wrap px-24 justify-center items-center mt-8 gap-8">
      {seriesData
        .filter((serie) =>
          serie.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((serie) => (
          <Link to={`/clicked-series/${serie.id}`} key={serie.id}>
            <TvSerie serie={serie} />
          </Link>
        ))}
    </div>
  );
}

export default TvSeries;
