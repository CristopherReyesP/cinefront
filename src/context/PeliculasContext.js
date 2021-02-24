import  { createContext, useEffect, useState } from 'react';
import { fetchtrending } from '../helpers/fetch';
export const PeliculasContext = createContext (); 

const initialState = {
    id:"1111",
    titulo:"Seleccione una Pelicula",
    overview:"Default",
    promedio:"10",
    lanzamiento:"2021",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cine.Ar_logo.svg/1280px-Cine.Ar_logo.svg.png",
    bac:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cine.Ar_logo.svg/1280px-Cine.Ar_logo.svg.png",
}

export const PeliculasProvider = ({children}) => {

    const [pelis, setPelis] = useState([]);
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(initialState);

    useEffect(() => {
        const imprimir = async () => {
            const { results } = await fetchtrending();
            const peliculas = results.map(r => (
                {
                    id: r.id,
                    titulo: r.title,
                    overview: r.overview,
                    img: r.poster_path,
                    bac: r.backdrop_path,
                    promedio: r.vote_average,
                    lanzamiento: r.release_date,
                }
            ));
            setPelis(peliculas);
        }
        imprimir();
    }, []);


    return(
        <PeliculasContext.Provider value={{
            pelis,
            peliculaSeleccionada,
            setPeliculaSeleccionada,
        }}>
            {children}
        </PeliculasContext.Provider>

    )
}