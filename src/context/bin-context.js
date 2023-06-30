import { createContext, useContext, useState } from "react";

const BinContext = createContext();

const BinProvider = ({children}) =>{
    const [binNotes, setBinNotes] = useState(JSON.parse(localStorage.getItem("bin-notes")) || [])
    return(
        <BinContext.Provider value={{binNotes,setBinNotes}}>
            {children}
        </BinContext.Provider>
    )
}

const useBin = () => useContext(BinContext)

export {useBin, BinProvider}