import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {

  const [tasks, setTasks] = useState(() => {

    const data = localStorage.getItem("tasks");

    return data ? JSON.parse(data) : [];

  });


  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("Todas");


  function updateTask(updatedTask) {

    setTasks(prevTasks =>

      prevTasks.map(task =>

        task.id === updatedTask.id
          ? updatedTask
          : task

      )

    );

  }


  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);


  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,

        search,
        setSearch,

        filter,
        setFilter,

        updateTask
      }}
    >

      {children}

    </TaskContext.Provider>
  );
}

export default TaskProvider;