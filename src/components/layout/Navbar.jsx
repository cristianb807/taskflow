import { FaClipboardList } from "react-icons/fa";
import AlarmButton from "./AlarmButton";
import StopAlarmButton from "./StopAlarmButton";


function Navbar() {

  return (

    <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">


        <div className="flex items-center gap-4">


          <FaClipboardList className="text-3xl text-green-400" />


          <div>

           <h1 className="
text-3xl
font-black
bg-gradient-to-r
from-green-400
to-emerald-600
bg-clip-text
text-transparent
">
TaskFlow
</h1>


            <p className="text-slate-400 text-sm">
              Gestor de tareas empresarial
            </p>


          </div>


        </div>



        <AlarmButton />

          <StopAlarmButton />


      </div>

    </header>

  );

}


export default Navbar;