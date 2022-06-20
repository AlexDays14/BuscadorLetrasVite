import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import Spinner from "./Spinner"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

    const {alerta, letra, cargando} = useLetras()
    return (
        <>
            <header>Búsqueda de Letras de Canciones</header>

            <Formulario/>

            <main>
                {alerta ? 
                    (cargando ? <Spinner/> 
                    : <Alerta>{alerta}</Alerta>)
                : (letra ? <Letra/> 
                    : cargando ? <Spinner/> 
                        : <p className="text-center">Busca Letras de tus Artistas Favoritos</p>
                    )
                }
            </main>
        </>
    )
}

export default AppLetras