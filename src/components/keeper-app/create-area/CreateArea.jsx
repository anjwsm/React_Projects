import React, { useState } from "react";
import './CreateArea.css';


function CreateArea(props){
    
    const [note , setNote] = useState({
        title:"" ,
        content:""
    });

    function handleCOntentChange(event){
        const {name , value} = event.target;

        setNote(prevNote=>{
            return {
               ...prevNote,
               [name] : value
            };
        });
    }

    function handleTitleChange(event){
        const {name , value} = event.target;

        setNote(prevNote=>{
            return{
               ...prevNote,
                title : value
            };
        });
    }

  

    function submitNote(event){
        event.preventDefault();

        props.onAdd(note);
        console.log('note->>>>', note);
        setNote({
            title:"",
            content: ""
        });
        
    }
      

    return(
        <div className="wrapper-create-area">
          <form>
             <input
               name="title"
               value={note.title}
               placeholder="Title"
               onChange={handleTitleChange}
             />
             <textarea
               name="content"
               value={note.content}
               onChange={handleCOntentChange}
               placeholder="Take a note"
             
               
              />
              <button onClick={submitNote}><img src="../src/assets/keeper-images/add.svg"/></button>

            </form>
          
        </div>
    )

}


export default CreateArea ;