import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Dumbell from "../assets/dumbbell.png";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = async () => {
    logout();
  };
  return (
    <div className="  flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-3 px-6 bg-wheat shadow-md sm:items-baseline w-full shadow-gray-900">
      {/* <Link to="/">
      <h1>Workout Buddy</h1>
      </Link> */}

      <div
        className="mb-2 sm:mb-0 flex 
  "
      >
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

      <div className="sm:mb-0 self-center  mr-4 flex">
        {user && (
          <div>
            <span className="text-white mr-2">Welcome, {user.email} !</span>
            <button
              className="text-md no-underline    rounded-md bg-primarycolor text-black hover:bg-transparent hover:border hover:border-primarycolor hover:text-myfontcolor w-24 h-10 mr-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        {!user && (
          <div>
            <Link to="/login">
              <button className="text-md no-underline    rounded-md bg-primarycolor text-black hover:bg-transparent hover:border hover:border-primarycolor hover:text-myfontcolor w-24 h-10">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-md no-underline text-myfontcolor hover:bg-primarycolor hover:text-black  ml-2 border border-primarycolor rounded-md  w-24 h-10">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
