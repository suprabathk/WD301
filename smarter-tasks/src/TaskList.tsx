import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
}

const TaskList = (props: TaskListProps) => {
  return (
    <div>
      <h3 className="text-slate-500 font-bold">Items:</h3>
      {props.tasks.map((task, idx) => (
        <Task
          key={idx}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
        />
      ))}
    </div>
  );
};

export default TaskList;
