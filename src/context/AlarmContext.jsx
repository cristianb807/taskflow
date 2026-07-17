import { createContext, useState, useEffect, useContext } from "react";
import { TaskContext } from "./TaskContext";

export const AlarmContext = createContext();


function AlarmProvider({ children }) {


  const { tasks } = useContext(TaskContext);


  const [alarmActive, setAlarmActive] = useState(false);

  const [triggered, setTriggered] = useState([]);

  const [currentAudio, setCurrentAudio] = useState(null);



  function activateAlarm() {

    setAlarmActive(true);


    if ("Notification" in window) {

      Notification.requestPermission();

    }

  }



  function deactivateAlarm() {

    setAlarmActive(false);

    setTriggered([]);

    stopAlarm();

  }



  function stopAlarm() {

    if (currentAudio) {

      currentAudio.pause();

      currentAudio.currentTime = 0;

      setCurrentAudio(null);

    }

  }




  useEffect(() => {


    if (!alarmActive) return;



    const interval = setInterval(() => {


      const now = new Date();



      const today = now
        .toISOString()
        .split("T")[0];



      const currentTime = now
        .toTimeString()
        .slice(0,5);




      tasks.forEach(task => {



        if (

          task.dueDate === today &&

          task.dueTime === currentTime &&

          task.status !== "Completada" &&

          !triggered.includes(task.id)

        ) {



        const audio = new Audio();

audio.src = `${import.meta.env.BASE_URL}alarm.mp3`;

audio.volume = 1;

audio.load();

audio.play()
.then(() => {

  console.log("🔊 Alarma sonando");

})
.catch(error => {

  console.log(
    "❌ Error reproduciendo alarma:",
    error
  );

});

          setCurrentAudio(audio);



          audio.play()
            .catch(error => {

              console.log(
                "Audio bloqueado:",
                error
              );

            });




          if (

            "Notification" in window &&

            Notification.permission === "granted"

          ) {


            new Notification(

              "🔔 Recordatorio",

              {

                body: task.title

              }

            );


          }



          setTriggered(prev => [

            ...prev,

            task.id

          ]);



        }


      });



    }, 1000);



    return () => clearInterval(interval);



  }, [alarmActive, tasks, triggered]);





  return (

    <AlarmContext.Provider

      value={{

        alarmActive,

        activateAlarm,

        deactivateAlarm,

        stopAlarm

      }}

    >

      {children}

    </AlarmContext.Provider>

  );

}


export default AlarmProvider;