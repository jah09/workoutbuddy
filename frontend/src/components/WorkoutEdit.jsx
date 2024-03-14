import React from "react";
import { HiPencil } from "react-icons/hi2";
const WorkoutEdit = ({ onEdit, workout }) => {
  const handleClick = () => {
    console.log("Edit button clicked for workout:", workout);
    // Perform edit action here
    // For example:
    // onEdit();
  };
  return (
    <div>
      <a href="">
        <HiPencil
          className=" text-primarycolor w-4 h-4 "
          onClick={handleClick}
        />
      </a>
    </div>
  );
};

export default WorkoutEdit;
