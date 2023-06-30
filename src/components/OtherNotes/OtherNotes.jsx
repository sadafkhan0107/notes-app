import { useNotes, useBin, useArchive, usePin } from "../../context";
import '../../pages/Home/home.css';

export const OtherNotes =() => {
    const {notesArray, setNotesArray} = useNotes()// unpinned notes
    const {pinNotes, setPinNotes} = usePin()  // pinned notes
    const {archiveNotes, setArchiveNotes} = useArchive();
    const {binNotes, setBinNotes} = useBin();

    const handlePinClick=(id) =>{  // to pin notes
    let pinned = notesArray.filter((note) => note.id === id)
    pinned = [...pinNotes ,...pinned]
    setPinNotes(pinned)
    localStorage.setItem("bin-notes", JSON.stringify(pinned));
    const updateNotesArr = notesArray.filter((note) => note.id !== id)
    setNotesArray( updateNotesArr)
    localStorage.setItem("notes", JSON.stringify(updateNotesArr));
    }

    const handleArchiveClick =(id) =>{   // add to archive from notes array
    let archive = notesArray.filter((note) => note.id === id)
    archive = [...archiveNotes, ...archive]
    setArchiveNotes(archive);
    localStorage.setItem("archive-notes", JSON.stringify(archive));
    const updatedArr = notesArray.filter((note) => note.id !== id)
    setNotesArray(updatedArr);
    localStorage.setItem("notes", JSON.stringify(updatedArr));
    }

    const handleNoteDel = (id) =>{
    let delArr = notesArray.filter((note) => note.id === id)
    delArr = [...binNotes, ...delArr]
    setBinNotes(delArr);
    localStorage.setItem("del-notes", JSON.stringify(delArr));
    const updatedArr = notesArray.filter((note) => note.id !== id)
    setNotesArray(updatedArr)
    localStorage.setItem("notes", JSON.stringify(updatedArr));
    }
        return (
            <div className="other-notes">
                <h3 className=""> Other Notes </h3>
                <div className="display-note-container">
                {notesArray?.length > 0 && notesArray.map((note) => {
                return (
                    <div className="note-containers">
                    <div className="note-title-container">
                    <span className="note-title"> {note.title} </span>
                        <button className="pin-btn top-btn" onClick={() => handlePinClick(note.id)}>
                        <span className="material-icons-outlined">push_pin</span>
                        </button>
                    </div>
                    <div className="note-note-container">{note.note}
                    <div className="down-btn"> 
                    <button className='archive-btn' onClick={() => handleArchiveClick(note.id)}>
                        <span className="material-icons-outlined">archive</span>
                    </button>
                    <button className='del-btn' onClick={() => handleNoteDel(note.id)}> 
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