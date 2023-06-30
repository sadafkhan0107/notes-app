import './Archive.css'
import '../../pages/Home/home.css';
import {Navbar, Aside} from '../../components';
import { useArchive, useNotes, useBin } from '../../context';

export const Archive = () => {
   const {archiveNotes, setArchiveNotes} = useArchive();
   // console.log(archiveNotes);
   const {notesArray, setNotesArray} = useNotes()
   const {binNotes, setBinNotes} = useBin()
   const handleUnArchiveClick = (id) =>{
      let updateNotesArr = archiveNotes.filter((note) => note.id === id)
      updateNotesArr = [...notesArray, ...updateNotesArr]
      setNotesArray(updateNotesArr)
      localStorage.setItem('notes', JSON.stringify(updateNotesArr))
      const updatedArchiveArr = archiveNotes.filter((note) => note.id !== id)
      setArchiveNotes(updatedArchiveArr)
      localStorage.setItem('archive-notes', JSON.stringify(updatedArchiveArr))
   }
   const handleArchiveDelClick = (id) =>{
      let updatedBin = archiveNotes.filter((note) => note.id === id)
      updatedBin = [...binNotes, ...updatedBin]
      setBinNotes(updatedBin)
      localStorage.setItem('bin-notes', JSON.stringify(updatedBin))
      const updatedArchiveArr = archiveNotes.filter((note) => note.id !== id)
      setArchiveNotes(updatedArchiveArr)
      localStorage.setItem('archive-notes', JSON.stringify(updatedArchiveArr))
   }
 return(
    <>
    <Navbar />
    <div className='archive-app'>
    <Aside />
    <main className='main'>
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
    </main>
    </div>
    </>
   
 )
}
