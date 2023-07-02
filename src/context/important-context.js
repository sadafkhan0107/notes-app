import { useContext, createContext, useState } from "react";

const ImportantContext = createContext();

const ImportantProvider = ({children}) => {
    const [importantNotes, setImportantNotes] = useState(JSON.parse(localStorage.getItem("important-notes")) || [])
    return (
        <ImportantContext.Provider value={{importantNotes, setImportantNotes}}>
            {children}
        </ImportantContext.Provider>
    )
}

const useImportant = () => useContext(ImportantContext);

export {useImportant, ImportantProvider}