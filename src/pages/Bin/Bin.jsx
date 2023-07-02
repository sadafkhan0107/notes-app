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
                        <div className="display-note-container">
                            {binNotes?.length > 0 && binNotes.map((note) => {
                                return(
                                    <div className='note-containers'>
                                        <div className="note-title-container d-flex"> 
                                            <span className="note-title"> {note.title} </span>
                                            <div className='left-auto'>
                                                <button className="cta-btn top-btn">
                                                <span className="material-icons-outlined">push_pin</span>
                                                </button>
                                            </div>
                                        </div>

                                    <div className="note-note-container">{note.note}</div>
                                            <div className="down-btn d-flex">
                                                <div className='left-auto d-flex gap'>
                                                    <button className='cta-btn'>
                                                        <span className="material-icons-outlined">archive</span>
                                                    </button>
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
        </div>
    )
}
