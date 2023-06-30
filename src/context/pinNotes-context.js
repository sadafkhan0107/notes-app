import { useContext, createContext, useState } from "react";

const PinContext = createContext()

const PinProvider = ({children}) => {
    const [pinNotes, setPinNotes] = useState(JSON.parse(localStorage.getItem("pin-notes")) || [])
    return(
        <PinContext.Provider value={{pinNotes, setPinNotes}}>
            {children}
        </PinContext.Provider>
    )
}


const usePin = () => useContext(PinContext)

export {usePin, PinProvider}