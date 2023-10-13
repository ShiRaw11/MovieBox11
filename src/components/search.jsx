import React from "react";

function MovieSearch({ searchStyle, placeholder, value,iconPresent,onChange,onSearch}) {

  return (
    <div className=" search">
      <div className="relative ">
        <input
          className={`w-[400px] bg-transparent placeholder:font-italic border border-slate-300 rounded-md border-white text-rose shadow-sm placeholder-slate-400 py-2 pl-10 pr-4 focus:outline-none  focus:ring-1 focus:ring-rose ${
            searchStyle ? searchStyle : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={onSearch}> 
          {iconPresent}
        </span>
      </div>
    </div>
  );
}

export default MovieSearch;
