import React from "react";
import { HiPencil } from "react-icons/hi2";
const WorkoutEdit = ({ onEdit, workout }) => {
  return (
    <div>
      <a href="">
        <HiPencil className=" text-primarycolor w-8 h-6 " onClick={onEdit} />
      </a>
    </div>
  );
};

export default WorkoutEdit;
