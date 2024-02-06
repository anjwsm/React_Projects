import React, { useEffect, useState } from "react";
import "./Registration.css";

function Registration() {
  
   const [inputData , setInputData] = useState({ name:"" , password: "" , email:""}) ;
   const [flag , setFlag] = useState(false);

   useEffect(()=>{
    console.log("registered")
   } , [flag]);

   function handleData(e){
    console.log(e.target.name, e.target.value)
    setInputData({...inputData , [e.target.name] : e.target.value})
    console.log(inputData)
   }

   function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.password || !inputData.email){
      alert("All fields are mandatory")
    }else {
      setFlag(true);
    }

   }



  return (
    <>
      <pre>{(flag)?<h2 className="ui-defined">Hello  {inputData.name} , You have successfully registered</h2> : " " }</pre>
      <form className="form-wrapper"  onSubmit={handleSubmit}>
       <div className="header"><h1>Registration Form</h1></div>
       <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}/>
       
       <input type="text" placeholder="Enter Your Email" name="email" value={inputData.email}  onChange={handleData}/>
       
       <input  type="text"  placeholder="Enter Your Password"  name="password" value={inputData.password}  onChange={handleData} />
       
    
       <button type="submit">Submit</button>
       
       
        
       
       
      </form>
    </>
  );
}

export default Registration;
