import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTask: (taskID: number) => void;
}

const TaskList = (props: TaskListProps) => {
  return (
    <div>
      <h3 className="text-slate-500 font-bold">Items:</h3>
      {props.tasks.map((task, idx) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          deleteTask={props.deleteTask}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
