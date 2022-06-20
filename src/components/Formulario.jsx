import { useState } from "react"
import useLetras from "../hooks/useLetras";

const Formulario = () => {

    const { setAlerta, busquedaLetra } = useLetras();

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    function handleSubmit(e){
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Campos obligatorios')
            return;
        }
        busquedaLetra(busqueda)
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Busca por Artistas y Canción</legend>

            <div className="form-grid">
                <div>
                    <label htmlFor="">Artista</label>
                    <input type="text" name="artista" placeholder="Nombre Artista" value={busqueda.artista} onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}/>
                </div>

                <div>
                    <label htmlFor="">Canción</label>
                    <input type="text" name="cancion" placeholder="Nombre Canción" value={busqueda.cancion} onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}/>
                </div>

                <input type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default Formulario