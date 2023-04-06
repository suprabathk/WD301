import React, { useEffect, useState } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const [lastID, setLastID] = useState(0);
  useEffect(() => {
    if (taskAppState.tasks.length !== 0) {
      setLastID(taskAppState.tasks[taskAppState.tasks.length - 1].id);
    }
  }, [taskAppState]);

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (taskID: number) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.id !== taskID),
    });
  };

  return (
    <div className="m-5 border-2 border-slate-200 p-5 rounded-md">
      <TaskForm addTask={addTask} lastID={lastID} />
      <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;
