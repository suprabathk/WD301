import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3 className="text-slate-500 font-bold">Items:</h3>
        {this.props.tasks.map((task) => (
          <Task
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
