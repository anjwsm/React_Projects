import React from "react";
import './Note.css';

 function Note(props){
    console.log('eachnote--------------->',props)
    function handleClick(){
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><img src="../src/assets/keeper-images/delete.svg"/></button>
        </div>
    )
}

export default Note;