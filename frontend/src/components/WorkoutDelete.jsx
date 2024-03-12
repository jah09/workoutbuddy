import React from 'react'
import { TrashIcon } from "@radix-ui/react-icons";
const WorkoutDelete = () => {
    const handleClick = async () => {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
      });
      const json = await response.json();
    };
  return (
    <div className="flex justify-end   ">
      <a onClick={handleClick} className="cursor-pointer">
        <TrashIcon className=" text-primarycolor w-8 h-6" />
      </a>
    </div>
  );
}

export default WorkoutDelete
