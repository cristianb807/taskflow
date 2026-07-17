import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";


function TaskForm({ editingTask, setEditingTask }) {


  const { tasks, setTasks } = useContext(TaskContext);



  const emptyForm = {

    title: "",

    description: "",

    priority: "Media",

    dueDate: "",

    dueTime: "",

    status: "Pendiente"

  };



  const [form, setForm] = useState(emptyForm);




  useEffect(() => {


    if(editingTask){


      setForm({

        title: editingTask.title,

        description: editingTask.description,

        priority: editingTask.priority,

        dueDate: editingTask.dueDate,

        dueTime: editingTask.dueTime || "",

        status: editingTask.status

      });


    }


  }, [editingTask]);






  function handleChange(e){


    setForm({

      ...form,

      [e.target.name]: e.target.value

    });


  }





  function handleSubmit(e){


    e.preventDefault();



    if(!form.title.trim()) return;




    if(editingTask){



      setTasks(

        tasks.map(task =>

          task.id === editingTask.id

          ?

          {

            ...task,

            ...form

          }

          :

          task

        )

      );



      setEditingTask(null);



    }else{


      const newTask = {


        id: Date.now(),

        ...form


      };



      setTasks([

        ...tasks,

        newTask

      ]);


    }





    setForm(emptyForm);


  }







  return (

    <section className="max-w-7xl mx-auto px-6">


      <form

        onSubmit={handleSubmit}

        className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        space-y-5
        "

      >



        <h2 className="text-2xl font-bold">

          {editingTask 
          
          ? "Editar tarea" 
          
          : "Nueva tarea"}

        </h2>





        <input

          type="text"

          name="title"

          placeholder="Título de la tarea"

          value={form.title}

          onChange={handleChange}

          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          outline-none
          "

        />






        <textarea

          name="description"

          placeholder="Descripción"

          value={form.description}

          onChange={handleChange}

          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          outline-none
          resize-none
          h-28
          "

        />







        <select

          name="priority"

          value={form.priority}

          onChange={handleChange}

          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          "

        >

          <option>Alta</option>

          <option>Media</option>

          <option>Baja</option>


        </select>







        <div className="grid md:grid-cols-2 gap-5">


          <input

            type="date"

            name="dueDate"

            value={form.dueDate}

            onChange={handleChange}

            className="
            w-full
            p-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            "

          />




          <input

            type="time"

            name="dueTime"

            value={form.dueTime}

            onChange={handleChange}

            className="
            w-full
            p-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            "

          />


        </div>






        <button

          className="
          bg-green-500
          text-black
          font-bold
          px-6
          py-3
          rounded-xl
          hover:bg-green-400
          transition
          "

        >

          {

          editingTask

          ? "Actualizar tarea"

          : "Crear tarea"

          }


        </button>




      </form>



    </section>

  );


}


export default TaskForm;