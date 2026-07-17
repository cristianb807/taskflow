import { useContext } from "react";
import { AlarmContext } from "../../context/AlarmContext";
import { FaBell, FaBellSlash } from "react-icons/fa";


function AlarmButton() {


  const {
    alarmActive,
    activateAlarm,
    deactivateAlarm
  } = useContext(AlarmContext);



  function handleClick() {

    if (alarmActive) {

      deactivateAlarm();

    } else {

      activateAlarm();

    }

  }



  return (

    <button

      onClick={handleClick}

      className={`
        flex
        items-center
        gap-3
        px-6
        py-3
        rounded-xl
        font-bold
        transition
        ${
          alarmActive
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-yellow-400 hover:bg-yellow-300 text-black"
        }
      `}

    >


      {
        alarmActive

        ?

        <FaBellSlash />

        :

        <FaBell />

      }



      {
        alarmActive

        ?

        "Desactivar alarmas"

        :

        "Activar alarmas"

      }


    </button>

  );

}


export default AlarmButton;