import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import "./App.css";

const App = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <div className={currentTheme.theme}>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
