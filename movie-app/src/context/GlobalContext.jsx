import { createContext } from "react";
import { useState, useEffect } from "react";
export const GlobalContext = createContext();

const API_KEY = "67d11c5721bc08223533ab2c6bcc2373";
const BASE_URL = "https://api.themoviedb.org/3";

function GlobalProvider({ children }) {
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getMovies() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setMoviesData(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  async function getSeries() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
      const data = await res.json();
      setSeriesData(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ seriesData, moviesData, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
