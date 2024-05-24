//67d11c5721bc08223533ab2c6bcc2373
//popular movies
//https://api.themoviedb.org/3/movie/popular?api_key=${67d11c5721bc08223533ab2c6bcc2373}
//popular tv series
//https://api.themoviedb.org/3/tv/popular?api_key=${67d11c5721bc08223533ab2c6bcc2373}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Header from "./components/Header";
import ClickedSerie from "./pages/ClickedSerie";
import ClickedMovie from "./pages/ClickedMovie";
import GlobalProvider from "./context/GlobalContext";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/clicked-series/:id" element={<ClickedSerie />} />
          <Route path="/clicked-movie/:id" element={<ClickedMovie />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
