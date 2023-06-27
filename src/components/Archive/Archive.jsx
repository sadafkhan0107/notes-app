import './Archive.css'
import { Navbar } from '../Navbar/Navbar';
import { useArchive } from '../../context/archive-context';
import { Aside } from '../Aside/Aside';
import { useNotes } from '../../context/notes-context';
import { useBin } from '../../context/bin-context';
export const Archive = () => {
   const {archiveNotes, setArchiveNotes} = useArchive();
   // console.log(archiveNotes);
   const {notesArray, setNotesArray} = useNotes()
   const {binNotes, setBinNotes} = useBin()
   const handleUnArchiveClick = (id) =>{
      const updateNotesArr = archiveNotes.filter((note) => note.id === id)
      setNotesArray([...notesArray, ...updateNotesArr])
      const updatedArchiveArr = archiveNotes.filter((note) => note.id !== id)
      setArchiveNotes(updatedArchiveArr)
   }
   const handleArchiveDelClick = (id) =>{
      const updatedBin = archiveNotes.filter((note) => note.id === id)
      setBinNotes([...binNotes, ...updatedBin])
      const updatedArchiveArr = archiveNotes.filter((note) => note.id !== id)
      setArchiveNotes(updatedArchiveArr)
   }
 return(
    <>
    <Navbar />
    <div className='archive-app'>
    <Aside />
    <div className='archive-body'>
    <h2>Archived Notes</h2>
    <div className='archive-notes'> 
    {archiveNotes?.length > 0 && archiveNotes.map((note) => {
      return(
         <div className="archive-note-containers">
            <div className="note-title-container"> <span className="note-title"> {note.title} </span>
            <button className="pin-btn top-btn">
               <span className="material-icons-outlined">push_pin</span>
            </button>
            </div>

            <div className="note-note-container">{note.note}</div>
            <div className="down-btn">
               <button className='archive-btn' onClick={() => handleUnArchiveClick(note.id)}>
                  <span className="material-icons">archive</span>
               </button>
               <button className='del-btn' onClick={() => handleArchiveDelClick(note.id)}> 
                  <span className="material-icons-outlined">delete </span>
               </button>
         </div> 
          </div>
      )
    })}
    </div>
    </div>
    </div>
    </>
   
 )
}
