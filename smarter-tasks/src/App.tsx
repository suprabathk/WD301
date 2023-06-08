import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<Navigate to={"/notfound"} />} />
      </Routes>
    </div>
  );
}

export default App;
