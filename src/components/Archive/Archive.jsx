import { Navbar } from '../Navbar/Navbar';
import { useArchive } from '../../context/archive-context/archive-context';
export const Archive = () => {
   const {archiveNotes, setArchiveNotes} = useArchive();
   console.log(archiveNotes);
 return(
    <>
    <Navbar />
    <h2>Archived Notes</h2>
    {archiveNotes?.length > 0 && archiveNotes.map((note) => {
      return(
         <div className="archive-note-containers">
            <div>{note.title} <button className="pin-btn"><span class="material-icons-outlined">push_pin</span></button></div>
            <div>{note.note}</div>
            <div><button className='archive-btn' ><span class="material-icons">archive</span></button>
            <button className='del-btn'> <span class="material-icons-outlined">delete </span></button>
         </div> 
          </div>
      )
    })}
    </>
   
 )
}
