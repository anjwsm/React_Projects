import './App.css'
import Carousel from './components/carousel/Carousel'
import data from "./data/carouselData.json";
import Dropdown from './components/dropdown/Dropdown';
import {dropdownItems} from './data/dropdownData.json';
import Header from './components/keeper-app/header/Header';
import  Footer from './components/keeper-app/footer/Footer';
import  CreateArea from './components/keeper-app/create-area/CreateArea';
import  Note  from './components/keeper-app/note/Note';
import  {useEffect, useState } from 'react';

function App() {

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

  return <>
    {/* <Carousel data = {data.slides} autoplayInterval={2000} /> */}
    {/*<Dropdown  data2 = {dropdownItems}/>*/}

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
   
}

export default App
