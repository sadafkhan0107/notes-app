import { useContext, createContext, useState } from "react";

const ArchiveContext = createContext();

const ArchiveProvider = ({children}) =>{
    const [archiveNotes, setArchiveNotes] = useState([])
    return (
        <ArchiveContext.Provider value={{archiveNotes,setArchiveNotes}}>
            {children}
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext);

export {useArchive, ArchiveProvider}