import logo from "..//assets/tv.png";
import React from "react";
import MovieButton from "./button";
import NavLink from "./link";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo, MdOutlineCalendarMonth } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

function SideBar() {
  return (
    <div className="w-[230px] h-[750px]  border border-light-gray rounded-r-lg  ">
      <div className="mx-[25px] mt-[35px] flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[63px] h-[63px] text-[12px] rounded-full"
        />
        <h className="ml-4">MovieBox</h>
      </div>
      <div className="mt-[40px]">
        <NavLink linkTitle={"Home"} icon={<GoHome />} to={'/MovieBox11/error/feature'}  />
        <NavLink linkTitle={"Movies"} icon={<BiCameraMovie />} />
        <NavLink linkTitle={"Tv Series"} icon={<MdOndemandVideo />} to={'/MovieBox11/error/feature'} />
        <NavLink linkTitle={"Upcoming"} icon={<MdOutlineCalendarMonth />} to={'/MovieBox11/error/feature'}  />
      </div>

      <div className="w-[200px] h-[200px] mt-[40px] ml-[15px] flex flex-col justify-center items-center border border-rose rounded-lg bg-200">
        <h className="text-[16px] ml-2 font-bold">
          Play movie quizes and earn free tickets
        </h>
        <p className="mt-2 ml-2">50k people are playing now</p>
        <MovieButton
          buttonText={"Start Playing"}
          buttonStyle={
            " w-[150px] h-[40px] mt-5 bg-light-red text-white text-[14px]"
          }
        />
      </div>

      <MovieButton
        buttonText={"Log Out"}
        buttonIconLeft={<TbLogout />}
        buttonStyle={
          " w-[120px] mt-5 text-gray bg-white text-[13px]  ml-[40px]"
        }
      />
    </div>
  );
}

export default SideBar;
