import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CursoContext = React.createContext();

const CursosProvider = ({children}) => {
    const baseUrl = 'http://192.168.137.152:9000';
    const [cursos, setCursos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [secciones, setSecciones] = useState([]);
    const [lecciones, setLecciones] = useState([]);
    const [competencias, setCompetencias] = useState([]);
    const [requerimientos, setRequerimientos] = useState([]);
    const [recursos, setRecursos] = useState([]);
    const [cursoUsuario, setCursoUsuario] = useState([]);
    const [capitulos, setCapitulos] = useState([])

    const getCursos = () => {
        axios.get(baseUrl+'/api/Cursos')
        .then((response) => {setCursos(response.data)})       
    }

    const getCursoUsuarios = () => {
        axios.get(baseUrl+'/api/CursoUsuarios')
        .then((response) => {setCursoUsuario(response.data)})       
    }
    

    const getUsuarios = () => {
        axios.get(baseUrl+'/api/Usuarios')
        .then((response) => {setUsuarios(response.data)})       
    }

    const getSecciones = () => {
        axios.get(baseUrl+'/api/Secciones')
        .then((response) => {setSecciones(response.data)})       
    }
    const getLecciones = () => {
        axios.get(baseUrl+'/api/lecciones')
        .then((response) => {setLecciones(response.data)})       
    }
    const getCompetencias = () => {
        axios.get(baseUrl+'/api/Competencias')
        .then((response) => {setCompetencias(response.data)})       
    }   
    const getRequerimientos = () => {
        axios.get(baseUrl+'/api/Requerimientos')
        .then((response) => {setRequerimientos(response.data)})       
    } 
    const getRecursos = () => {
        axios.get(baseUrl+'/api/Recursos')
        .then((response) => {setRecursos(response.data)})       
    } 

   

    useEffect(() => {
        getCursos()
        getUsuarios()
        getCompetencias()
        getRequerimientos()
        getLecciones()
        getSecciones()
        getRecursos()
        getCursoUsuarios()
    },[])
    
    return(
        <CursoContext.Provider
        value={
            {
               cursos,  
               usuarios,
               secciones,
               lecciones,
               competencias,
               requerimientos,
               recursos,
               baseUrl,
               cursoUsuario,
               capitulos,
               setCapitulos
            }
        }
        >{children}</CursoContext.Provider>
    )
}

export {CursosProvider}
export default CursoContext