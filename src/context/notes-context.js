import { useContext, createContext, useState } from "react";

const NotesContext = createContext();
const initialNotes = [
    {
      id: 1,
      title: "Bir - trip",
      note: "Mountain trip solo"
    },
    {
      id: 2,
      title: "Goa - trip",
      note: "Goa trip with friends"
    },
    {
      id: 3,
      title: "Home",
      note: "Packing and do tickets for agra"
    }
  ]

const NotesProvider =({children}) => {
    const [notesArray, setNotesArray] = useState(JSON.parse(localStorage.getItem("notes")) || initialNotes)
    return ( 
    <NotesContext.Provider value={{notesArray,setNotesArray}}>
        {children}
    </NotesContext.Provider>  
    )}


const useNotes = () => useContext(NotesContext)

export {useNotes, NotesProvider}