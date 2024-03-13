import React from "react";
import WorkoutDelete from "./WorkoutDelete";
import { TrashIcon } from "@radix-ui/react-icons";
import { FaTrash } from "react-icons/fa6";

import { formatDistanceToNow } from "date-fns";
import WorkoutEdit from "./WorkoutEdit";
const WorkoutDetails = ({ workout, onDelete, onEdit }) => {
  return (
    <div
      className="flex flex-col p-6 mb-2 bg-[#09150c] shadow-md hover:shodow-lg rounded-2xl "
      key={workout._id}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-accentcolor bg-myfontcolor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div className="flex flex-col ml-3  ">
            <div className="flex   w-[31rem]">
              <div className="font-medium leading-none text-primarycolor flex-1  ">
                {workout.title}
              </div>{" "}
              <div className="flex justify-end   px-2 gap-x-2 ">
                {/* <a onClick={handleClick} className="cursor-pointer">
                  <FaTrash className=" text-primarycolor w-8 h-6" />
                </a> */}
                <WorkoutDelete onDelete={onDelete} workout={workout} />
                <WorkoutEdit onEdit={onEdit} workout={workout} />
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-none mt-1 text-myfontcolor">
              Reps: {workout.reps}
            </p>
            <p className="text-sm text-gray-600 leading-none mt-1 text-myfontcolor">
              Load: {workout.load}
            </p>
            <p className="text-sm text-gray-600 leading-none mt-1 text-myfontcolor">
              {formatDistanceToNow(new Date(workout.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
