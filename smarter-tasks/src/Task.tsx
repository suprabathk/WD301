import React from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
  id: number;
  deleteTask: (taskID: number) => void;
}

const Task = (props: TaskProps) => {
  return (
    <li className="TaskItem shadow-md border border-slate-200 px-4 py-2 my-2 rounded-md list-none flex justify-between items-center">
      <div>
        <Link to={`/tasks/${props.id}`}>
          <h2 className="text-base font-bold my-1">{props.title} </h2>
        </Link>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="deleteTaskButton bg-red-500 rounded-md h-fit px-4 py-1 text-white hover:bg-red-700 transition-all"
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
