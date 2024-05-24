import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";
import Movie from "../components/Movie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SliderItem from "../components/SliderItem";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TvSerie from "../components/TvSerie";
import { FaPlay } from "react-icons/fa";

function Home() {
  const { moviesData, isLoading, seriesData, searchTerm } =
    useContext(GlobalContext);

  const popularMovies = moviesData.filter((movie) => movie.vote_average >= 7);
  const popularSeries = seriesData.filter((serie) => serie.vote_average >= 7);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel>
        {moviesData.slice(16, 19).map((movie) => (
          <Link key={movie.id} to={`/clicked-movie/${movie.id}`}>
            <div key={movie.id} className="relative">
              <SliderItem movie={movie} />
              <div className="absolute pl-24 top-1/2 text-left right-1/2 transform -translate-y-1/2 font-serif  text-white">
                <h1 className=" text-6xl uppercase font-extrabold relative">
                  {movie.title}
                </h1>
                <div className="mt-4 text-xl">
                  <span>
                    {movie.vote_average.toFixed(1)}(Imdb) {""}
                  </span>
                  <span className="rounded-sm text-center ml-2 bg-gray-500  px-2 py-[3px]">
                    {movie.release_date}
                  </span>
                </div>
                <p className="text-lg mt-2">{movie.overview}</p>
                <div>
                  <Link
                    className=" p-2 w-[130px] mt-2 items-center justify-center flex rounded-md font-bold font-serif bg-red-700 hover:bg-red-600 transition duration-300 ease-in-out text-white text-center"
                    to={movie.homepage}
                  >
                    <FaPlay />
                    <span className="pl-2">Play Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>

      <div>
        <h1 className="text-3xl text-center mb-4 mt-8 text-white">
          {" "}
          Popular Movies
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-screen px-4 ">
            <CarouselMulti
              swipeable={false}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000} 
              keyBoardControl={true}
              customTransition="transform 500ms ease-in-out" 
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
            >
              {popularMovies
                .filter((item) =>
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((movie) => (
                  <Link key={movie.id} to={`/clicked-movie/${movie.id}`}>
                    <Movie key={movie.id} movie={movie} />
                  </Link>
                ))}
            </CarouselMulti>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-3xl text-center mb-4 mt-8 text-white">
          {" "}
          Popular Series
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-screen px-4 ">
            <CarouselMulti
              swipeable={false}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000} 
              keyBoardControl={true}
              customTransition="transform 500ms ease-in-out" 
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
            >
              {popularSeries
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((serie) => (
                  <Link key={serie.id} to={`/clicked-movie/${serie.id}`}>
                    <TvSerie serie={serie} key={serie.id} />
                  </Link>
                ))}
            </CarouselMulti>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
