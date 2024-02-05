import Note from "../note/Note";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CreateArea from "../create-area/CreateArea";
import { useState ,useEffect } from "react";

function KeeperApp() {
    const [notes , setNotes] = useState([]) ;

  function addNote(note) {
    const nextNotes= [...notes,note]
    setNotes(nextNotes);
  }

  function deleteNote(id) {
    const nextState=notes.filter((noteItem, index) => {
      return index !== id;
    });
    setNotes(nextState);
  }
    

  useEffect(() => {
    console.log('notes---->',notes)
  }, [notes]);

  return (
    <>
         <Header/>
  <CreateArea onAdd={addNote} name='notekkper'/>
  {notes.map((noteItem, index) => {
           return (
          <Note 
           key={index} 
           id={index}
           title={noteItem.title}
           content={noteItem.content}
           onDelete={deleteNote}
          />
            );
      })}
  <Footer/>
    </>
  )

}

export default KeeperApp ;