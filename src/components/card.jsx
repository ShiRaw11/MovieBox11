
import tomatoIcon from '..//assets/tomato.png'
import imdb from '..//assets/imdb.png'
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function MovieCard({image,date, title,rating,tomato,id}){

const [isLoved, setIsLoved] = useState(false);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };
    return(
        <div data-testid='movie-card' className="h-[520px] w-[250px] mt-[20%]">
            <div className='relative'>
            <Link to={`/movie/${id}`} className="w-full h-auto">
                
            <img data-testid ='movie-poster' className="h-[370px]  border w-full object-cover " src={`https://image.tmdb.org/t/p/original${image}`} alt='Movie Image'></img>
            </Link>
            <button
        onClick={handleLoveClick}
        className={`absolute top-2 right-2 p-2 rounded-full  ${
          isLoved
            ? 'bg-white text-red hover:text-red'
            : 'bg-icon-bg text-white hover:text-white'
        } transition-colors duration-300`}
      >
        <FaHeart className="w-6 h-6" />
      </button>
            </div>


<div className="">
<p data-testid ='movie-release-date'className="text-gray mt-4 text-[12px]" >{date}</p>

<div className='mt-4'>
<h2 data-testid ='movie-title'  className='text-[18px] font-semibold'>{title}</h2>
    </div>
<div className="flex justify-between mt-4 ">
<h className='flex text-[12px] ml2 items-center'><img className='mr-3' src={imdb}></img> {rating}</h>
<h className=' flex text-[12px] mr-2  items-center'> <img className='mr-3' src={tomatoIcon}></img> {tomato}</h>

</div>
<p className="mt-3  text-gray">Action, Adventure</p>
</div>

        </div>
    )
}

export default MovieCard