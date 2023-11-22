import { useContext } from "react";
import CursoContext from '../services/context/CursosProvider';

const useCursos = () => {
    return useContext(CursoContext);
}
export default useCursos;
