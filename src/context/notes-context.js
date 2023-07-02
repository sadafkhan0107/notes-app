import { useContext, createContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider =({children}) => {
    const [notesArray, setNotesArray] = useState(JSON.parse(localStorage.getItem("notes")) || [])
    return ( 
    <NotesContext.Provider value={{notesArray,setNotesArray}}>
        {children}
    </NotesContext.Provider>  
    )}


const useNotes = () => useContext(NotesContext)

export {useNotes, NotesProvider}