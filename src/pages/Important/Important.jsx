import '../Home/home.css';
import { ImportantInput, Navbar, Aside} from "../../components";
import { useImportant,useNotes } from '../../context';

export const Important = () => {
    const {importantNotes, setImportantNotes} = useImportant();
    const {notesArray, setNotesArray} = useNotes();
    
    const handleImpClick= (id) => {
        let updateArr = importantNotes.filter((note) => note.id === id)
        updateArr = [...notesArray, ...updateArr]
        setNotesArray(updateArr)
        localStorage.setItem('notes', JSON.stringify(updateArr))
        const updatedImpArr = importantNotes.filter((note) => note.id !== id)
        setImportantNotes(updatedImpArr)
        localStorage.setItem('important-notes', JSON.stringify(updatedImpArr))
    }
    return (
        <>
         <Navbar />
            <div className="app">
                <Aside />
                <main className="main">
                  <ImportantInput />
                  <div className='important-notes'>
                    {importantNotes?.length > 0 && <h1> Important Notes</h1>}
                    <div className="display-note-container">
                    {importantNotes?.length > 0 && importantNotes.map((note) => {
                        return(
                            <div className='note-containers'>
                                <div className="note-title-container"> <span className="note-title"> {note.title} </span>
                                </div>

                           <div className="note-note-container">{note.note}</div>
                                 <div className="down-btn d-flex">
                                        <div>
                                            <button className='imp-btn' onClick={() => handleImpClick(note.id)}>Important</button>
                                        </div>
                                        <div className='left-auto d-flex end'>
                                            <button className='cta-btn'> 
                                             <span className="material-icons-outlined">delete </span>
                                            </button>
                                        </div>
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