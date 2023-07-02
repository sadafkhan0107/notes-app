import '../../pages/Home/home.css';
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { useNotes } from "../../context";

export const Input = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const {notesArray, setNotesArray} = useNotes()
    const handleTitle=(e)=>{
        setTitle(e.target.value)
      }
      const handleNote=(e) =>{
        setNote(e.target.value)
      }
      const handleAddNoteClick = (id) =>{ 
        let newNote =[...notesArray, {id:uuid(), title:title, note:note}]
        setNotesArray(newNote)
        localStorage.setItem("notes", JSON.stringify(newNote));
        setTitle("");
        setNote("");
     }
    return(
        <div className="note-input-container d-flex">
            <div className='input-box d-flex'>
              <input value={title} placeholder='Enter Title' className='input title-box' onChange={handleTitle}/>
              <textarea value={note} placeholder='Enter note' className='input note-box' onChange={handleNote}/>
              <button disabled = {!(title.length || note.length)} className= {`add-btn ${(title.length || note.length) ? 'pointer add-btn-en-bg' : 'add-btn-dis-bg' }`}  onClick={ handleAddNoteClick}> 
                 <span className="material-icons-outlined">add</span>
              </button>
            </div>
          </div>
    )
}