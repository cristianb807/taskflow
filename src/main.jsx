import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskProvider from "./context/TaskContext.jsx";
import AlarmProvider from "./context/AlarmContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <AlarmProvider>
        <App />
      </AlarmProvider>
    </TaskProvider>
  </StrictMode>
);