import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle
} from "react-icons/fa";


function Stats() {


  const { tasks } = useContext(TaskContext);



  const total = tasks.length;


  const pending = tasks.filter(
    task => task.status === "Pendiente"
  ).length;


  const progress = tasks.filter(
    task => task.status === "En proceso"
  ).length;


  const completed = tasks.filter(
    task => task.status === "Completada"
  ).length;



  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100);




  const cards = [

    {
      title:"Total",
      value: total,
      icon:<FaTasks/>,
      color:"text-green-400",
      bg:"bg-green-500/10"
    },


    {
      title:"Pendientes",
      value: pending,
      icon:<FaClock/>,
      color:"text-yellow-400",
      bg:"bg-yellow-500/10"
    },


    {
      title:"En proceso",
      value: progress,
      icon:<FaSpinner/>,
      color:"text-blue-400",
      bg:"bg-blue-500/10"
    },


    {
      title:"Completadas",
      value: completed,
      icon:<FaCheckCircle/>,
      color:"text-emerald-400",
      bg:"bg-emerald-500/10"
    }


  ];





  return (


    <section className="
      max-w-7xl
      mx-auto
      px-6
      py-10
    ">



      <div className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-5
      ">



      {
        cards.map((card,index)=>(


          <div

            key={index}

            className="
              bg-slate-900/80
              backdrop-blur-xl
              border
              border-slate-700/50
              rounded-3xl
              p-6
              shadow-xl
              hover:-translate-y-1
              hover:shadow-2xl
              transition-all
              duration-300
              animate-[fadeIn_0.5s_ease]
            "

          >



            <div

              className={`
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-2xl
                text-2xl
                ${card.color}
                ${card.bg}
              `}

            >

              {card.icon}

            </div>




            <p className="
              text-slate-400
              mt-5
            ">

              {card.title}

            </p>




            <h2 className="
              text-5xl
              font-black
              mt-2
            ">

              {card.value}

            </h2>




            <p className="
              text-xs
              text-slate-500
              mt-2
            ">

              tareas registradas

            </p>



          </div>


        ))
      }


      </div>





      {/* PROGRESO GENERAL */}


      <div className="
        mt-8
        bg-slate-900/80
        backdrop-blur-xl
        border
        border-slate-700/50
        rounded-3xl
        p-6
        shadow-xl
      ">


        <div className="
          flex
          justify-between
          items-center
          mb-4
        ">


          <h3 className="
            font-bold
            text-xl
          ">

            Progreso general

          </h3>



          <span className="
            text-green-400
            font-black
          ">

            {percentage}%

          </span>


        </div>





        <div className="
          h-4
          bg-slate-800
          rounded-full
          overflow-hidden
        ">


          <div

            className="
              h-full
              bg-gradient-to-r
              from-green-400
              to-emerald-600
              transition-all
              duration-700
            "

            style={{
              width:`${percentage}%`
            }}

          />

        </div>




        <p className="
          text-sm
          text-slate-400
          mt-3
        ">

          Has completado {completed} de {total} tareas

        </p>



      </div>



    </section>


  );

}


export default Stats;