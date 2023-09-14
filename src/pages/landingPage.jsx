import logo from "..//assets/tv.png";
import MovieSearch from "../components/search";
import { FaSearch, FaImdb } from "react-icons/fa";
import { BsPlayCircle, BsChevronRight } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import MovieButton from "../components/button";
import tomato from "..//assets/tomato.png";
import MovieCard from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";

export const Welcome = () => {
  return (
    <div className=" bg-poster bg-no-repeat bg-cover  h-[100vh] w-[100vw]">
      <div className="flex pt-[15px] justify-around items-center  ">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[63px] h-[63px] text-[12px] rounded-full"
          />
          <h className="ml-4 text-white fonr-medium">MovieBox</h>
        </div>
        <div>
          <MovieSearch
            placeholder={"Search movie"}
            iconPresent={<FaSearch className="text-white" />}
          />
        </div>
        <div className="flex items-center">
          <MovieButton
            buttonText={"Sign in"}
            buttonStyle={"border-none bg-transparent text-white "}
            buttonIconRight={
              <CgMenuRound className="text-rose w-[30px] h-[30px] hover:text-black" />
            }
          />
        </div>
      </div>

      <div className="h-[380px] w-[400px] ml-[8%] mt-[10%] pl-3">
        <h className="text-[48px] text-white font-bold">
          John Wick 3: Parallebum
        </h>
        <div className="flex mt-3 ">
          <h className="text-white flex items-center">
            <FaImdb className=" text-yellow mr-2" /> 70/100
          </h>
          <h className="text-white flex items-center ml-4">
            {" "}
            <img src={tomato} alt="tomato icon" className="mr-2"></img> 6.8/10
          </h>
        </div>
        <p className="text-white mt-4 text-[14px]">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <MovieButton
          buttonStyle={"rounded-lg w-[200px] text-white mt-4 rounded-none"}
          buttonText={"Watch Trailer"}
          buttonIconLeft={<BsPlayCircle />}
        />
      </div>
    </div>
  );
};

export const FeaturedMovie = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVjNWU4MTFhMzNjMzg4ODY2OWU0MDA5NDY4OWM4OCIsInN1YiI6IjY1MDA3Y2M2ZWZlYTdhMDExYWI4MTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJ1SehYAuzg8XTFIkpX9rnD5CNrY6Zn_SkoBjkIRZT8",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const results = response.data.results || [];
        const topMovies = results.slice(0, 10);

        setMovie(topMovies);
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className=" h-[100vh] w-[100vw]">
      <div className="flex w-[90%] mx-auto  justify-between items-center mt-4">
        <h className="text-[36px] font-medium"> Featured Movie</h>
        <a
          href="/movie"
          className="text-rose flex items-center cursor-pointer hover:font-bold "
        >
          {" "}
          See More <BsChevronRight className="ml-2" />
        </a>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-4 ">
        {movies.map((movie, index) => (
          <MovieCard
            image={movie.poster_path}
            key={index}
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
            rating={movie.popularity}
            tomato={movie.vote_average}
            genre={movie.genre}
          />
        ))}
      </div>
    </div>
  );
};

function LandingPage() {
  return (
    <>
      <Welcome />
      <FeaturedMovie />
    </>
  );
}

export default LandingPage;
