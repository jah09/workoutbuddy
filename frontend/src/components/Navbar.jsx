import React from "react";
import { Link } from "react-router-dom";
import Dumbell from "../assets/dumbbell.png";
const Navbar = () => {
  return (
    <div className="  flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-3 px-6 bg-wheat shadow-md sm:items-baseline w-full shadow-gray-900">
      {/* <Link to="/">
      <h1>Workout Buddy</h1>
      </Link> */}

      <div
        className="mb-2 sm:mb-0 flex 
  ">
        <div className="h-14 w-14 self-center mr-2 bg-myfontcolor rounded-md">
          <img className="p-1" src={Dumbell} />
        </div>
        <div className=" mt-3">
          <Link to="/">
            <h1 className="text-2xl no-underline text-grey-darkest hover:text-blue-dark   font-bold text-myfontcolor">
              {" "}
              Workout Buddy
            </h1>
          </Link>
        </div>
      </div>

      <div className="sm:mb-0 self-center  mr-4">
        <button
          className="text-md no-underline    rounded-md bg-primarycolor text-black hover:bg-transparent hover:border hover:border-primarycolor hover:text-myfontcolor w-24 h-10"
          href="/login">
          Login
        </button>
        <button
          href="#"
          className="text-md no-underline text-myfontcolor hover:bg-primarycolor hover:text-black  ml-2 border border-primarycolor rounded-md  w-24 h-10">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
