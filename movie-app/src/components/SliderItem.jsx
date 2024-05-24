function SliderItem({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div className=" mx-6 h-[90vh] mt-6">
      <img
        src={posterUrl}
        className="w-screen h-full object-center  object-fill opacity-25"
        alt="title"
      />
    </div>
  );
}

export default SliderItem;
