import { createContext, useContext, useState } from "react";


const ResultDatos = createContext()

export function useDatosContext(){
    return useContext(ResultDatos)
}



export const DatosContext = ({children}) => {
   const [data1, setData] = useState({})

   const updateData=(newData)=>{
    setData(newData)
   }
  return (
    <ResultDatos.Provider value={{data1, updateData}}>{children}</ResultDatos.Provider>
  )
}
