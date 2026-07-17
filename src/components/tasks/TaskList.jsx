import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList({ onEdit }) {

  const { tasks, search, filter } = useContext(TaskContext);


  const filteredTasks = tasks.filter(task => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesFilter =
      filter === "Todas" ||
      task.status === filter;


    return matchesSearch && matchesFilter;

  });


  return (

    <section className="max-w-7xl mxauto px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Mis tareas
      </h2>


      {
        filteredTasks.length === 0 ? (

          <p className="text-slate-400">
            No hay tareas para mostrar
          </p>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
              filteredTasks.map(task => (

                <TaskCard

                  key={task.id}

                  task={task}

                  onEdit={onEdit}

                />

              ))
            }

          </div>

        )
      }


    </section>

  );

}

export default TaskList;