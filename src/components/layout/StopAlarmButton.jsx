import { useContext } from "react";
import { AlarmContext } from "../../context/AlarmContext";
import { FaVolumeMute } from "react-icons/fa";


function StopAlarmButton(){


const { stopAlarm } = useContext(AlarmContext);



return (

<button

onClick={stopAlarm}

className="
flex
items-center
gap-3
bg-red-500
hover:bg-red-600
text-white
font-bold
px-5
py-3
rounded-xl
"

>

<FaVolumeMute />

Silenciar alarma

</button>

);


}


export default StopAlarmButton;