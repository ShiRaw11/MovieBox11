import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSearch from '../components/search';
import { Link } from "react-router-dom";

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestedMovies([]);
      return;
    }
    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVjNWU4MTFhMzNjMzg4ODY2OWU0MDA5NDY4OWM4OCIsInN1YiI6IjY1MDA3Y2M2ZWZlYTdhMDExYWI4MTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJ1SehYAuzg8XTFIkpX9rnD5CNrY6Zn_SkoBjkIRZT8",
        },
      };
  
    axios
    .request(options)
      .then((response) => {
        const results = response.data.results;
        if (results.length === 0) {
            console.log('No movies found');
            setSuggestedMovies([]);
          } else {
  
            // Filter the results based on the search query
            const filteredResults = results.filter((movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
  
            setSuggestedMovies(filteredResults);
          }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  return (
    <div className="relative">
    
      <MovieSearch
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}/>

      {suggestedMovies.length > 0 && (
        <div className="absolute mt-1 w-full bg-white border border-gray  rounded shadow-lg">
          {suggestedMovies.map((movie) => (
<div  key={movie.id} className='p-2 hover:border-r-4 border:rose hover:bg-light-red cursor-pointer'>
<Link  to={`/MovieBox11/${movie.id}`} >
                    {movie.title}
                 </Link>
              
    </div>
                
            
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;