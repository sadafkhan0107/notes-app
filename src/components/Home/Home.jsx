import { Navbar } from "../Navbar/Navbar"
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './home.css';
import { useArchive } from "../../context/archive-context/archive-context";

export const Home = () =>{
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [notesArray, setNotesArray] = useState([])
  const [pinNotes, setPinNotes] = useState([])
  // const [unpinNotes, setUnpinNotes] = useState([...notesArray])
  const {archiveNotes, setArchiveNotes} = useArchive();
  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }
  const handleNote=(e) =>{
    setNote(e.target.value)
  }
  const handleAddNoteClick = (_id) =>{ 
    setNotesArray([...notesArray, {id:uuid(), title:title, note:note}])
    setTitle("");
    setNote("");
  }
const handlePinClick=(id) =>{
  const pinned = notesArray.filter((note) => note.id === id)
  setPinNotes(pinned);
  setNotesArray(notesArray.map((note) => note.id !== id))
}
const handleArchiveClick =(id) =>{
  const archive = notesArray.filter((note) => note.id === id)
  setArchiveNotes({...archiveNotes, archive});
  setNotesArray(notesArray.map((note) => note.id !== id));
}
const handlePinArchiveClick =(id) =>{
  const archive = pinNotes.filter((note) => note.id === id)
  setArchiveNotes({...archive, archive});
  setPinNotes(pinNotes.map((note) => note.id !== id));
}
  
  return (
    <>
    <Navbar />
    <div className="container">
      <div className='input-box'>
        <input value={title} placeholder='Enter Title' className='title-box' onChange={handleTitle}/>
        <textarea value={note} placeholder='Enter note' className='note-box' onChange={handleNote}/>
        <button className='add-btn' onClick={ handleAddNoteClick}> <span class="material-icons-outlined">add</span></button>
      </div>

       <div className="display-note-container">
        {notesArray?.length > 0 && notesArray.map((note) => {
          return (
            <div className="unPin-note-containers">
            <div>{note.title} <button className=".pin-btn" onClick={() => handlePinClick(note.id)}><span class="material-icons-outlined">push_pin</span></button></div>
            <div>{note.note}</div>
            <div><button className='.archive-btn' onClick={() => handlePinArchiveClick(note.id)}><span class="material-icons-outlined">archive</span></button>
            <button className='.del-btn'> <span class="material-icons-outlined">delete </span></button>
         </div> 
          </div>
          )
        }
        )
        }
        </div>
      
        {pinNotes?.length > 0 ? <p>Pinned Notes</p> : <></>}
        <div className='display-note-container'>
        {pinNotes?.length > 0 && pinNotes.map((note) => {
          return (
            <div className="pin-note-containers">
            <div>{note.title} </div>
        <div>{note.note}</div>
        <div><button onClick={() => handleArchiveClick(note.id)}><span class="material-icons-outlined">archive</span></button>
        <button><span class="material-icons-outlined">delete </span></button>
      </div>
      </div>
          )
        }
        )
        }
        </div>  
    </div>
    </> 
  );
}