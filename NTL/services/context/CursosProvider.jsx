import axios from "axios";
import React, { useEffect, useState } from "react";

const CursoContext = React.createContext();

const CursosProvider = ({children}) => {

    const [cursos, setCursos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    
    
    const getCursos = () => {
            axios.get('http://192.168.137.129:9000/api/Cursos')
            .then((response) => {setCursos(response.data)})       
    }
    const getUsuarios = () => {
            axios.get('http://192.168.137.129:9000/api/Usuarios')
            .then((response) => {setUsuarios(response.data)})       
    }

    useEffect(() => {
        getCursos()
        getUsuarios()
    },[])
    
    return(
        <CursoContext.Provider
        value={
            {
               cursos,  
               usuarios
            }
        }
        >{children}</CursoContext.Provider>
    )
}
export {CursosProvider}
export default CursoContext