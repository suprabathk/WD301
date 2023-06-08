import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userDetails = localStorage.getItem("userData");
  const parsedUserDetails = userDetails ? JSON.parse(userDetails) : {};
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          id="logout-link"
          onClick={() => {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userData");
            navigate("/signin");
          }}
        >
          Signout
        </button>
      </div>
      <h3 className="text-4xl font-bold">Hello, {parsedUserDetails.name}</h3>
      <p className="text-gray-700">{parsedUserDetails.email}</p>
    </div>
  );
};

export default Dashboard;
