import { Link } from "react-router-dom";
import React from "react";
function NavLink({
  to,
  icon,
  linkTitle,
  navLinkStyle,
  linkStyle,
  linkTitleStyle,
}) {
  return (
    <div
      className={`text-gray w-[230px] h-[50px] pl-[20px] mt-[10px]  flex items-center hover:border-r-4 border:rose hover:bg-light-red hover:text-rose${
        navLinkStyle ? navLinkStyle : ""
      }`}
    >
      <Link to={to} className={`flex h-[100%] w-[100%] items-center ${linkStyle ? linkStyle : ""}`}>
        {icon}
        <h2
          className={`text-[16px] font-medium tracking-widest text-black pl-[10px] active:text-rose ${
            linkTitleStyle ? linkTitleStyle : ""
          }`}
        >
          {linkTitle}
        </h2>
      </Link>
    </div>
  );
}

export default NavLink;
