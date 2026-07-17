import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function FilterButtons() {

  const { filter, setFilter } = useContext(TaskContext);


  const buttons = [
    "Todas",
    "Pendiente",
    "En proceso",
    "Completada"
  ];


  return (

    <section className="max-w-7xl mx-auto px-6">

      <div className="flex flex-wrap gap-4">

        {
          buttons.map(button => (

            <button

              key={button}

              onClick={() => setFilter(button)}

              className={`
                px-5
                py-3
                rounded-xl
                font-bold
                transition

                ${
                  filter === button
                  ? "bg-green-500 text-black"
                  : "bg-slate-900 border border-slate-800"
                }

              `}

            >

              {button}

            </button>

          ))
        }

      </div>

    </section>

  );

}

export default FilterButtons;