import Spinner from "./Spinner";
import useLetras from "../hooks/useLetras"

const Letra = () => {

    const { letra, cargando } = useLetras();
    return (
        cargando ? <Spinner/>  :
        <div className="letra">{letra}</div>
    )
}

export default Letra