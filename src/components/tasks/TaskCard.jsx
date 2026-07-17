import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { 
  FaCalendarAlt, 
  FaTrash, 
  FaEdit, 
  FaClock 
} from "react-icons/fa";


function TaskCard({ task, onEdit }) {


  const { tasks, setTasks } = useContext(TaskContext);



  function deleteTask(id) {

    const confirmDelete = window.confirm(
      "¿Eliminar esta tarea?"
    );


    if (!confirmDelete) return;


    setTasks(
      tasks.filter(task => task.id !== id)
    );

  }




  function changeStatus(id, status) {

    setTasks(

      tasks.map(task =>

        task.id === id

        ? {
            ...task,
            status
          }

        : task

      )

    );

  }




  function priorityStyle(priority) {

    switch(priority){

      case "Alta":
        return "border-red-500 text-red-400 bg-red-500/10";


      case "Media":
        return "border-yellow-500 text-yellow-400 bg-yellow-500/10";


      case "Baja":
        return "border-green-500 text-green-400 bg-green-500/10";


      default:
        return "border-slate-700 text-slate-400";

    }

  }




  function statusStyle(status){

    switch(status){

      case "Pendiente":
        return "bg-yellow-500/20 text-yellow-400";


      case "En proceso":
        return "bg-blue-500/20 text-blue-400";


      case "Completada":
        return "bg-green-500/20 text-green-400";


      default:
        return "bg-slate-700 text-slate-300";

    }

  }





  return (


    <div

      className="
      relative
      bg-slate-900/80
backdrop-blur-xl
border
border-slate-700/50
rounded-3xl
p-6
shadow-xl
hover:shadow-green-500/10
      overflow-hidden
      hover:-translate-y-1
      hover:border-slate-600
      transition
      "

    >


      <div className="absolute left-0 top-0 h-full w-1 bg-green-400"></div>



      <div className="flex justify-between items-start gap-3">


        <h3 className="text-xl font-bold">

          {task.title}

        </h3>




        <span

          className={`
          px-3
          py-1
          rounded-full
          text-xs
          font-bold
          border
          ${priorityStyle(task.priority)}
          `}

        >

          {task.priority}

        </span>



      </div>





      <p className="text-slate-400 mt-4 min-h-[50px]">

        {task.description || "Sin descripción"}

      </p>





      <div className="flex justify-between items-center mt-6">



        <select

          value={task.status}

          onChange={(e)=>
            changeStatus(
              task.id,
              e.target.value
            )
          }

          className="
          bg-slate-800
          border
          border-slate-700
          rounded-xl
          px-3
          py-2
          text-sm
          outline-none
          "

        >

          <option>
            Pendiente
          </option>

          <option>
            En proceso
          </option>

          <option>
            Completada
          </option>


        </select>




        <span

          className={`
          px-3
          py-1
          rounded-full
          text-xs
          font-bold
          ${statusStyle(task.status)}
          `}

        >

          {task.status}

        </span>



      </div>






      <div className="mt-6 space-y-2 text-sm text-slate-400">



        <div className="flex items-center gap-2">

          <FaCalendarAlt/>

          {task.dueDate || "Sin fecha"}

        </div>




        {
          task.dueTime && (

            <div className="flex items-center gap-2 text-green-400">

              <FaClock/>

              {task.dueTime}

            </div>

          )
        }


      </div>







      <div className="flex gap-3 mt-6">


        <button

          onClick={() => onEdit(task)}

          className="
          flex-1
          flex
          items-center
          justify-center
          gap-2
          bg-blue-500
          hover:bg-blue-600
          py-3
          rounded-xl
          font-bold
          transition
          "

        >

          <FaEdit/>

          Editar

        </button>





        <button

          onClick={() => deleteTask(task.id)}

          className="
          flex-1
          flex
          items-center
          justify-center
          gap-2
          bg-red-500
          hover:bg-red-600
          py-3
          rounded-xl
          font-bold
          transition
          "

        >

          <FaTrash/>

          Eliminar

        </button>



      </div>




    </div>


  );

}


export default TaskCard;