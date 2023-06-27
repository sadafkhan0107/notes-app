import { Navbar } from "../Navbar/Navbar"
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './home.css';
import { useArchive } from "../../context/archive-context";
// import { useNavigate} from 'react-router-dom';
import { Aside } from "../Aside/Aside";
import { useNotes } from "../../context/notes-context";
import { useBin } from "../../context/bin-context";

export const Home = () =>{
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const {notesArray, setNotesArray} = useNotes()// unpinned notes
  const [pinNotes, setPinNotes] = useState([])  // pinned notes
  const {archiveNotes, setArchiveNotes} = useArchive();
  const {binNotes, setBinNotes} = useBin();
  // const navigate = useNavigate();
  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }
  const handleNote=(e) =>{
    setNote(e.target.value)
  }
  const handleAddNoteClick = (id) =>{ 
    setNotesArray([...notesArray, {id:uuid(), title:title, note:note}])
    setTitle("");
    setNote("");
  }
const handlePinClick=(id) =>{  // to pin notes
  const pinned = notesArray.filter((note) => note.id === id)
  setPinNotes([...pinNotes ,...pinned]);
  const updateNotesArr = notesArray.filter((note) => note.id !== id)
  setNotesArray( updateNotesArr)
}
const handleUnPinClick=(id) =>{  // to unpin notes
  const unpinned = pinNotes.filter((note) => note.id === id) 
  const pinned = pinNotes.filter((note) => note.id !== id) 
  setPinNotes(pinned)
  setNotesArray([...notesArray, ...unpinned])
}
const handleArchiveClick =(id) =>{   // add to archive from notes array
  const archive = notesArray.filter((note) => note.id === id)
  setArchiveNotes([...archiveNotes, ...archive]);
  const updatedArr = notesArray.filter((note) => note.id !== id)
  setNotesArray(updatedArr);
}
const handlePinArchiveClick =(id) =>{   // add to archive from pinned notes array
  const archive = pinNotes.filter((note) => note.id === id)
  setArchiveNotes([...archiveNotes, ...archive]);
  const updatePinnedArr = pinNotes.filter((note) => note.id !== id)
  setPinNotes(updatePinnedArr);
}
const handleNoteDel = (id) =>{
  const delArr = notesArray.filter((note) => note.id === id)
  setBinNotes([...binNotes, ...delArr]);
  const updatedArr = notesArray.filter((note) => note.id !== id)
  setNotesArray(updatedArr)
}
const handlePinnedDelClick = (id) => {
  const delArr = pinNotes.filter((note) => note.id === id)
  setBinNotes([...binNotes, ...delArr])
  const updatedArr = pinNotes.filter((note) => note.id !== id)
  setPinNotes(updatedArr)
}
  return (
    <div className="notes">
    <Navbar />
    <div className="app">
    <Aside />
    <div className="home-body">
      <div className='input-box'>
        <input value={title} placeholder='Enter Title' className='input title-box' onChange={handleTitle}/>
        <textarea value={note} placeholder='Enter note' className='input note-box' onChange={handleNote}/>
        <button className='add-btn' onClick={ handleAddNoteClick}> <span className="material-icons-outlined">add</span></button>
      </div>
       
       {/* UnPinned Notes */}
       <h3> Notes </h3>
       <div className="display-note-container">
        {notesArray?.length > 0 && notesArray.map((note) => {
          return (
            <div className="unPin-note-containers">
            <div className="note-title-container">
              <span className="note-title"> {note.title} </span>
                <button className="pin-btn top-btn" onClick={() => handlePinClick(note.id)}>
                   <span className="material-icons-outlined">push_pin</span>
                </button>
              </div>
            <div className="note-note-container">{note.note}</div>
            <div className="down-btn">
              <button className='archive-btn' onClick={() => handleArchiveClick(note.id)}>
                <span className="material-icons-outlined">archive</span>
              </button>
              <button className='del-btn' onClick={() => handleNoteDel(note.id)}> 
                <span className="material-icons-outlined">delete </span> 
              </button>
         </div> 
          </div>
          )})}

        </div>
        {/* Pinned Notes */}
        {/* {console.log(pinNotes?.length)} */}
        {pinNotes?.length > 0 ? <p>Pinned Notes</p> : <></>}
        <div className='display-note-container'>
        {pinNotes?.length > 0 && pinNotes?.map((note) => {
          return (
            <div className="pin-note-containers">
            <div className="note-title-container">
              <span>{note.title} </span> 
              <button className="pin-btn top-btn" onClick={() => handleUnPinClick(note.id)}>
                <span className="material-icons">push_pin</span>
              </button> 
            </div>
            <div className="note-note-container">
              {note.note}
            </div>
            <div className="down-btn">
              <button className='archive-btn' onClick={() => handlePinArchiveClick(note.id)}>
                <span className="material-icons-outlined">archive</span>
              </button>
              <button className='del-btn' onClick={() => handlePinnedDelClick(note.id)}>
                <span className="material-icons-outlined">delete </span>
              </button>
            </div>
          </div>
          )})}
        </div>  
    </div>
    </div> 
    </div>
  );
}
