import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
  return (
    <li className="TaskItem shadow-md border border-slate-200 px-4 py-2 my-2 rounded-md list-none">
      <h2 className="text-base font-bold my-1">{props.title} </h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </li>
  );
};

export default Task;
