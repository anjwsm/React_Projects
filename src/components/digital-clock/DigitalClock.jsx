import React, { useEffect, useState } from "react";
import './DigitalClock.css';


function DigitalClock(){
const [currenttime , setCurrenttime] = useState('');

 useEffect(()=>{
   const interval = setInterval(() => {
     const time = new Date().toLocaleTimeString();
     setCurrenttime(time);
   }, 1000);

   return () => clearInterval(interval);
 },[])

    return (
        <div className="wrapper-digiclock">


          <h1 className="header">{currenttime}</h1>
        </div>
    )
}


export default DigitalClock;