import { createContext, useContext, useReducer } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";


//Bos bir merkezi state olusturuldu
const StoreContext=createContext();

//Componentlerde merkezi sisteme erisimi kolaylastirmak icin kendi hook umuzu yazdik
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({children})=>{
//useReducer hookuna reducer ve initialstate parametre olarak verilir
//useReduce fonksiyonu ise geriye setter ve getter lari doner
//           getter         setter
    const [counterState, dispatchCounter] =useReducer(counterReducer, counterInitialState)

    return (
        <StoreContext.Provider value={{counterState,dispatchCounter }}>
            {children}
        </StoreContext.Provider>
    )
}