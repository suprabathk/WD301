import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title.length > 0 && this.state.dueDate.length > 0) {
      this.props.addTask({
        title: this.state.title,
        description: this.state.description,
        dueDate: this.state.dueDate,
      });
      this.setState({ title: "", description: "", dueDate: "" });
    }
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  render() {
    return (
      <div className="my-4">
        <h3 className="text-slate-500 font-bold">Add item:</h3>
        <form
          className="flex flex-col gap-4 border my-2 border-slate-200 py-4 px-2 rounded-md shadow-md"
          onSubmit={this.addTask}
        >
          <div className="flex flex-col">
            <label htmlFor="todotitle">Title:</label>
            <input
              id="todoTitle"
              className="border border-slate-200 rounded-md"
              required
              type="text"
              value={this.state.title}
              onChange={this.titleChanged}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="todoDescription">Description:</label>
            <input
              id="todoDescription"
              className="border border-slate-200 rounded-md"
              type="text"
              value={this.state.description}
              onChange={this.descriptionChanged}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="todoDueDate">Due date:</label>
            <input
              id="todoDueDate"
              className="border border-slate-200 rounded-md"
              required
              type="date"
              value={this.state.dueDate}
              onChange={this.dueDateChanged}
            />
          </div>
          <button
            id="addTaskButton"
            className="border border-green-400 rounded-md"
            type="submit"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
