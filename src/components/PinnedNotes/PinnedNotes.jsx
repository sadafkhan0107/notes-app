import '../../pages/Home/home.css';
import { useBin, useArchive, usePin, useNotes } from "../../context";

export const PinnedNotes = () => {
    const {pinNotes, setPinNotes} = usePin();
    const {archiveNotes, setArchiveNotes} = useArchive();
    const {binNotes, setBinNotes} = useBin();
    const {notesArray, setNotesArray} = useNotes()// unpinned notes

    const handleUnPinClick=(id) =>{  // to unpin notes
        let unpinned = pinNotes.filter((note) => note.id === id) 
        unpinned = [...notesArray, ...unpinned]
        setNotesArray(unpinned)
        localStorage.setItem("notes", JSON.stringify(unpinned));
        const pinned = pinNotes.filter((note) => note.id !== id) 
        setPinNotes(pinned)
        localStorage.setItem("pin-notes", JSON.stringify(unpinned));
      }
    const handlePinArchiveClick =(id) =>{   // add to archive from pinned notes array
        let archive = pinNotes.filter((note) => note.id === id)
        archive = [...archiveNotes, ...archive]
        setArchiveNotes([...archiveNotes, ...archive]);
        localStorage.setItem("archive-notes", JSON.stringify(archive))
        const updatePinnedArr = pinNotes.filter((note) => note.id !== id)
        setPinNotes(updatePinnedArr);
        localStorage.setItem('pin-notes', JSON.stringify(updatePinnedArr))
      }
    const handlePinnedDelClick = (id) => {
        let delArr = pinNotes.filter((note) => note.id === id)
        delArr = [...binNotes, ...delArr]
        setBinNotes(delArr)
        localStorage.setItem('bin-notes',JSON.stringify(delArr))
        const updatedArr = pinNotes.filter((note) => note.id !== id)
        setPinNotes(updatedArr)
        localStorage.setItem('pin-notes', JSON.stringify(updatedArr))
      }
    return(
        <div>
            {/* Pinned Notes */}
            {/* {console.log(pinNotes?.length)} */}
            {pinNotes?.length > 0 ? <h3 className="sub-title">Pinned Notes</h3> : <></>}
            <div className='display-note-container'>
                    {pinNotes?.length > 0 && pinNotes?.map((note) => {
                    return (
                        <div className="note-containers">
                            <div className="note-title-container">
                                <span>{note.title} </span> 
                                <button className="pin-btn top-btn" onClick={() => handleUnPinClick(note.id)}>
                                    <span className="material-icons">push_pin</span>
                                </button> 
                            </div>
                            <div className="note-note-container">
                                    {note.note}
                                    <div className="down-btn">
                                        <button className='archive-btn' onClick={() => handlePinArchiveClick(note.id)}>
                                            <span className="material-icons-outlined">archive</span>
                                        </button>
                                        <button className='del-btn' onClick={() => handlePinnedDelClick(note.id)}>
                                            <span className="material-icons-outlined">delete </span>
                                        </button>
                                    </div>
                            </div>
                    </div>
                    )})}
           </div>
        </div>
    )
}