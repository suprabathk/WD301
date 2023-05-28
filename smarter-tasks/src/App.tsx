import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskApp />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
