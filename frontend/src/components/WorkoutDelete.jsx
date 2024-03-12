import React from 'react'
import { TrashIcon } from "@radix-ui/react-icons";
import { FaTrash } from "react-icons/fa6";
const WorkoutDelete = ({ onDelete, workout }) => {
 
  return (
    <div className="flex justify-end   ">
      <a onClick={() => onDelete(workout._id)} className="cursor-pointer">
        <FaTrash className=" text-primarycolor w-8 h-6" />
      </a>
    </div>
  );
};

export default WorkoutDelete
