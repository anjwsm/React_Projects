import React, { useState } from "react";
import './BmiCalculator.css' ;

function BmiCalculator(){

    const [weight , setWeight] = useState('');
    const [height , setHeight] = useState('');
    const [message , setMessage] = useState('');
    const [bmi , setBmi] = useState('');

    function calculateBmi(e){
        e.preventDefault() ;
        if (!weight || !height){
            alert ("All fields are mandatory")
        } else {
            let bmi = (weight/(height * height))  ;
            setBmi (bmi.toFixed(1));


            if (bmi <= 18.5){
                setMessage("You are under-weight")
            } else if ( bmi == 18.5 && bmi <= 24.9){
                setMessage ("You are healthy")

            } else if (bmi == 25 && bmi <= 29.9){
                setMessage("You are over-weight")
            } else 
              setMessage ("You are suffering from obesity")
             
        }

    }

    const reload = (e) => {

        setBmi('')
        setMessage('')
        setHeight('')
        setWeight('')
        // window.location.reload();
       
    }
    return(
        <>
         <div className="bmi-calculator-wrapper" >
          <h1>BMI CALCULATOR</h1>
            <form onSubmit={calculateBmi}>
             <div>
                <label > Weight(kg) : </label>
                <input type="number" placeholder="Enter Your weight" value={weight}  onChange={(e) => setWeight (e.target.value)}></input>
             </div>
             <div>
                <label> Height (metre) : </label>
                <input type="number" placeholder="Enter your height" value={height} onChange={(e)=> setHeight( e.target.value)} ></input>
             </div>
             <div className="btn-div">
             <button type="submit" className="btn"> Submit</button>
             <button type='reset' onClick={reload}  className="btn reload"> Reload</button>
             </div>
             <div>
                <h3>Your BMI is {bmi}</h3>
                <p>{message}</p>
             </div>

                
            
            </form>
         </div>

        </>
    )
}

export default BmiCalculator ;