import React, { useEffect, useState } from "react";

const CursoContext = React.createContext();

const CursosProvider = ({children}) => {

    const [cursos, setCursos] = useState([]);
    
    const getCursos = async () => {
        const response = await fetch('http://localhost:9000/api/Cursos')
        const cursosJson = await response.json();
        setCursos(cursosJson);
    }
    useEffect(() => {
        getCursos()
    },[])
    
   
    
    return(
        <CursoContext.Provider
        value={
            {
               cursos,
               
            }
        }
        >{children}</CursoContext.Provider>
    )
}
export {CursosProvider}
export default CursoContext