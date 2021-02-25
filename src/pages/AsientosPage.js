import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PeliculasContext } from '../context/PeliculasContext';

export const AsientosPage = () => {
    const { peliculaSeleccionada: peli } = useContext(PeliculasContext);
    return (
        <div>
            <h1> AsientosPage </h1>
            <hr />
            <h1>{peli.titulo}</h1>
            <h3>Fecha de lanzamiento: {peli.lanzamiento}</h3>
            <br />
            <p>{peli.overview}</p>
            <Link
                            className="btn btn-info"
                            to='/home'
                        >Regresar</Link>
        </div>
    )
}
