import React from 'react'
function MovieSearch({searchStyle,placeholder,iconPresent}) {
    return (
         <div className=" search">
                <div className="relative ">
                   
                   <input
                    className={`w-[400px] bg-transparent placeholder:font-italic border border-slate-300 rounded-md border-white text-sm shadow-sm placeholder-slate-400 py-2 pl-10 pr-4 focus:outline-none  focus:ring-1 focus:ring-rose ${searchStyle? searchStyle : ""}`}
                    placeholder={placeholder} type="text" /> 
                     <span className="absolute inset-y-0 right-0 flex items-center pr-3">    
                        {iconPresent}
                    </span>
                </div>
         </div>
      );
}

export default MovieSearch;