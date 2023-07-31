import './Bin.css';
import '../../pages/Home/home.css';
import { useBin,useNotes } from "../../context";
import {Navbar, Aside} from '../../components';
import { useEffect } from 'react';

export const Bin = () => {
    const { binNotes,setBinNotes} = useBin();
    const {notesArray, setNotesArray} = useNotes();

        useEffect(() => {
            let timerId 
            if(binNotes?.length > 0){
                timerId = setInterval(() => {
                    // let currentDate = new Date()
                   const updatedBinNotes = binNotes.filter((item) => !(new Date().getTime() - new Date(item.createdAt).getTime() > (7 * 24 * 60 * 60 * 1000)))
                   console.log(updatedBinNotes)
                   setBinNotes(updatedBinNotes)
                   localStorage.setItem('bin-notes', JSON.stringify(updatedBinNotes))
                }, 1000)
            }
            return () => {
                clearInterval(timerId)
            }
    }, [binNotes])
  
    console.log(binNotes)
    const handleRestoreClick = (id) => {
        let updatedArr = binNotes.filter((note) => note.id === id)
        updatedArr = [...notesArray, ...updatedArr]
        setNotesArray(updatedArr)
        localStorage.setItem('notes', JSON.stringify(updatedArr))
        const updatedBin = binNotes.filter((note) => note.id !== id)
        setBinNotes(updatedBin)
        localStorage.setItem('bin-notes', JSON.stringify(updatedBin))
    }
    const handleDelete = (id) => {
        const updatedBin = binNotes.filter((note) => note.id !== id)
        setBinNotes(updatedBin)
        localStorage.setItem('bin-notes', JSON.stringify(updatedBin))
    }
    return(
        <div className='bin-app'>
            <Navbar />
            <div className='d-flex bin-body'>
                <Aside />
                <main className='main'>
                    <div className='deleted-notes'>
                        {binNotes?.length > 0 && <h1> Deleted Notes</h1>}
                        <div className="display-note-container">
                            {binNotes?.length > 0 ? binNotes.map((note) => {
                                return(
                                    <div className='note-containers'>
                                        <div className="note-title-container d-flex"> 
                                            <span className="note-title"> {note.title} </span>
                                            <div className="left-auto">
                                              <button className="cta-btn top-btn" onClick={() => handleRestoreClick(note.id)}>
                                              <span class="material-icons-outlined">restore_from_trash</span>
                                              </button>
                                            </div>
                                        </div>

                                    <div className="note-note-container">{note.note}</div>
                                            <div className="down-btn d-flex">
                                                <div className='left-auto d-flex gap'>
                                                    <button className='cta-btn' onClick={() => handleDelete(note.id)}> 
                                                        <span className="material-icons-outlined">delete </span>
                                                    </button>
                                                </div>
                                            </div> 
                                        </div>
                                )
                            }) : <p className='no-notes'>No notes found in the bin</p>}
                        </div>
                    </div>
               </main>
            </div>
        </div>
    )
}
