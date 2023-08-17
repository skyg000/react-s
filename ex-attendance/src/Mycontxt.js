import {createContext, useState} from 'react'
const DataContext = createContext();

function Mycontxt({children}) {
    const [data,setData] = useState([]);
    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
        
    )
}

export {Mycontxt,DataContext}