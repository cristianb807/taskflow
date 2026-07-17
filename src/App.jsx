import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Stats from "./components/dashboard/Stats";
import TaskForm from "./components/tasks/TaskForm";
import SearchBar from "./components/tasks/SearchBar";
import TaskList from "./components/tasks/TaskList";


function App() {


  const [editingTask, setEditingTask] = useState(null);



  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-green-950
      text-white
    ">


      <Navbar />



      <main className="
        max-w-7xl
        mx-auto
        px-6
        space-y-8
      ">



        <Stats />



        <div className="
          grid
          lg:grid-cols-3
          gap-8
          items-start
        ">



          <div className="lg:col-span-1">


            <TaskForm

              editingTask={editingTask}

              setEditingTask={setEditingTask}

            />


          </div>





          <div className="
            lg:col-span-2
            space-y-5
          ">



            <SearchBar />



            <TaskList

              onEdit={setEditingTask}

            />



          </div>



        </div>



      </main>



    </div>

  );

}


export default App;