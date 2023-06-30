import './Bin.css';
import '../../pages/Home/home.css';
import { useBin } from "../../context";
import {Navbar, Aside} from '../../components';

export const Bin = () => {
    const { binNotes } = useBin();
    return(
        <div className='bin-app'>
            <Navbar />
            <div className='d-flex bin-body'>
                <Aside />
                <main className='main'>
                <div className='deleted-notes'>
                    <h1> Deleted Notes</h1>
                    {binNotes?.length > 0 && binNotes.map((note) => {
                        return(
                            <div className='bin-note-container'>
                                <div className="note-title-container"> <span className="note-title"> {note.title} </span>
                                    <button className="pin-btn top-btn">
                                      <span className="material-icons-outlined">push_pin</span>
                                     </button>
                                </div>

                           <div className="note-note-container">{note.note}</div>
                                 <div className="down-btn">
                                    <button className='archive-btn'>
                                        <span className="material-icons">archive</span>
                                    </button>
                                    <button className='del-btn'> 
                                        <span className="material-icons-outlined">delete </span>
                                    </button>
                                  </div> 
                </div>
                )
              })}
               </div>
               </main>
            </div>
        </div>
    )
}
