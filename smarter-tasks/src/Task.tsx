import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-200 px-4 py-2 my-2">
        <h2 className="text-base font-bold">{this.props.title}</h2>
        <p className="text-sm text-slate-500">{this.props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default Task;
