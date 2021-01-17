import React, { useEffect, useState } from 'react';
import "../css/timer.css"

function Timer({time,autostart,step}) {
  const [timeLeft,setTimeLeft]=useState(time/1000)
  const [isTimerGoing,setIsTimerGoing]=useState(autostart)
  const timeStep=step/1000;

useEffect(()=>{
if(isTimerGoing){
  const changeTimer=setTimeout(()=>{
    if(timeLeft-timeStep<=0){
      setTimeLeft(0)
      setIsTimerGoing(false)
    }
    else{
      setTimeLeft(timeLeft-timeStep)
    }
  },step);

  if(!timeLeft){
    alert("Час вийшов")
  }
  return ()=>clearTimeout(changeTimer)
}
},[timeLeft])


  return ( 
    <div>
      <p className="timer">{timeLeft}</p>
      <button className="btn" onClick={()=>{
        if(timeLeft){
          setIsTimerGoing(true)
          setTimeout(()=>setTimeLeft(timeLeft-timeStep),step);
        }
      }}>Start</button>
      <button className="btn" onClick={()=>setIsTimerGoing(false)}>Stop</button>
    </div>
   );
}
 
export default Timer;

