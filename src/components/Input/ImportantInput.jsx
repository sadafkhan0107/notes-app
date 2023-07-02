import '../../pages/Home/home.css';
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { useImportant } from '../../context/important-context';

export const ImportantInput = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const {importantNotes, setImportantNotes} = useImportant();
    const handleTitle=(e)=>{
        setTitle(e.target.value)
      }
      const handleNote=(e) =>{
        setNote(e.target.value)
      }
      const handleAddNoteClick = (id) =>{ 
        let newNote =[...importantNotes, {id:uuid(), title:title, note:note}]
        setImportantNotes(newNote)
        localStorage.setItem("important-notes", JSON.stringify(newNote));
        setTitle("");
        setNote("");
     }
    return(
        <div className="note-input-container d-flex">
            <div className='input-box d-flex'>
              <input value={title} placeholder='Enter Title' className='input title-box' onChange={handleTitle}/>
              <textarea value={note} placeholder='Enter note' className='input note-box' onChange={handleNote}/>
              <button className='add-btn' onClick={ handleAddNoteClick}> 
                 <span className="material-icons-outlined">add</span>
              </button>
            </div>
          </div>
    )
}