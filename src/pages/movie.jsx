import SideBar from "../components/sideBar";
import React from 'react'
import suggestion from "..//assets/sugestion.png";
import { FaAngleDown, FaPlay, FaStar } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";

import MovieButton from "../components/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const [movies, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();
  function getYear(releaseDate) {
    const date = new Date(releaseDate);

    return date.getFullYear();
  }
  function Runtime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    const hoursText = hours > 0 ? `${hours}h` : '';
    const minutesText = remainingMinutes > 0 ? `${remainingMinutes}m` : '';
  
    return `${hoursText} ${minutesText}`;
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVjNWU4MTFhMzNjMzg4ODY2OWU0MDA5NDY4OWM4OCIsInN1YiI6IjY1MDA3Y2M2ZWZlYTdhMDExYWI4MTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJ1SehYAuzg8XTFIkpX9rnD5CNrY6Zn_SkoBjkIRZT8",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, [id]);
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>

      {error ? (
        <div className="mt-[20%] ml-[10%]">
          <h1>Error</h1>
          <p className="text-error">
            Sorry, there was an error fetching movie details. Please try again
            later.
          </p>
        </div>
      ) : (
        <div>
          <div className="w-[78vw] relative h-[300px] ml-6 mt-6  ">
            <img
              className="h-[100%] w-[100%] object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
            ></img>

            <div className="absolute w-[120px] flex items-center justify-center h-[100px] top-1/3 left-1/2  ">
              <button
                className={
                  "absolute w-[50px]  h-[50px] flex justify-center  items-center pl-2 rounded-full bg-icon-bg text-white hover:text-rose hover:bg-white"
                }
              >
                <FaPlay className="w-6 h-6" />
              </button>
              <MovieButton
                buttonText={"Watch Trailer "}
                buttonStyle={
                  "text-white absolute top-2  mt-14 bg-transparent hover:bg-transparent h-[30px]"
                }
              />
            </div>
          </div>

          <div className="flex mt-4 items-center ml-8 text-desc">
            <div className="flex  items-center  w-[480px] mt-2">
              <h
                className="text-[16px] text-desc w-[50%] font-semibold flex items-center"
                data-testid="movie-title"
              >
                {movies.title} <GoDotFill className="text-black ml-2 h-2 w-2" />
              </h>

              <h
                data-testid="movie-release-date "
                className="w-[12%] flex items-center ml-2"
              >
                {getYear(movies.release_date)}<GoDotFill className="text-black ml-2 h-2 w-2" />

              </h>
              <h className="flex  w-[14%] items-center ml-2">
                {" "}
                PG-13 <GoDotFill className="text-black ml-2 h-2 w-2" />
              </h>
              <h
                className="text-[18px] w-[20px] font-semibold w-[25%] ml-2 flex items-center "
                data-testid="movie-runtime"
              >
                {Runtime(movies.runtime)}
              </h>
            </div>
            <div className="flex ml-4">
              <MovieButton
                buttonText={"Action"}
                buttonStyle={
                  "h-[29px] w-[80px] text-[15px] bg-white border  border-rose text-rose"
                }
              />

              <MovieButton
                buttonText={"Drama"}
                buttonStyle={
                  "h-[29px] w-[80px] text-[15px] ml-2 bg-white border border-rose text-rose "
                }
              />
            </div>

            <div className="w-[350px] ml-4 flex  justify-end pr-8">
              <h className="flex items-center">
                <FaStar className="text-yellow" />
                {movies.vote_average}
              </h>{" "}
              <h>| {movies.vote_count}</h>
            </div>
          </div>
          <div className="flex  justify-between mt-5">
            <div className=" w-[68%]">
              <p data-testid="movie-overview" className="ml-8 text-[18px] mt-2">
                {movies.overview}
              </p>
              <div className="flex flex-col mt-5 ml-8">
                <h>
                  {" "}
                  Director :<h className="text-rose">  Joseph Kosinski </h>{" "}
                </h>
                <h className="mt-5">
                  {" "}
                  Writers :{" "}
                  <h className="text-rose"> Jim Cash, Jack Epps Jr,  Peter Craig</h>{" "}
                </h>
                <h className="mt-5">
                  {" "}
                  Stars :{" "}
                  <h className="text-rose">Tom Cruise, Jennifer Connelly, Miles Teller</h>{" "}
                </h>
              </div>

              <div className="flex w-[90%] border border-gray rounded-lg ml-8 mt-6">
                <MovieButton
                  buttonText={"Top rated #29"}
                  buttonStyle={"rounded-lg w-[30%] text-white text-[15px]"}
                />
                <MovieButton
                  buttonText={"Awards 9 nominations"}
                  buttonIconRight={<FaAngleDown />}
                  buttonStyle={
                    "rounded-lg bg-white w-[70%] px-5 flex justify-between text-black"
                  }
                />
              </div>
            </div>
            <div className="flex flex-col  ml-3  ">
              <MovieButton
                buttonIconLeft={<IoTicketOutline />}
                buttonText={"See showtime"}
                buttonStyle={"rounded-lg w-[250px] text-white"}
              />
              <MovieButton
                buttonIconLeft={<TfiMenuAlt />}
                buttonText={"More Watch options "}
                buttonStyle={
                  "rounded-lg w-[250px] bg-btn border border-rose text-rose mt-5"
                }
              />
              <div className="mt-2 w-[90%] ml-2 relative group">
                <img src={suggestion}></img>
                <div className="bg-gray border w-full flex absolute h-[40px] pt-2 justify-center pl-5 bottom-0 hidden group-hover:block">
                  <h className="flex text-white items-center text-[12px]">
                    <TfiMenuAlt className="mr-2" />
                    The Best Movies and Shows in September
                  </h>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
