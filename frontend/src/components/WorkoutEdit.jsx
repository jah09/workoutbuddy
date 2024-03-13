import React from "react";
import { HiPencil } from "react-icons/hi2";
const WorkoutEdit = ({ onEdit, workout }) => {
  return (
    <div>
      <a href="">
        <HiPencil className=" text-primarycolor w-4 h-4 " onClick={onEdit} />
      </a>
    </div>
  );
};

export default WorkoutEdit;
