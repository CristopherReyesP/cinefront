import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';
import '../css/infocard.css';

export const InfoCard = () => {
    const { peliculaSeleccionada: peli } = useContext(PeliculasContext);
    console.log(peli)
    return (
        <div className="infoContainer" >
            <div className="posterContainer">
                <img className="poster" src={peli.img} alt={peli.titulo} />
            </div>
            <div className="informacion">
                <h1>{peli.titulo}</h1>
                <h3>Fecha de lanzamiento: {peli.lanzamiento}</h3>
                <br />
                <p>{peli.overview}</p>
                <button
                    className="btn btn-info"
                    type="button"
                >Conseguir Ticket</button>
            </div>
            <img className="imagenFondo" src={peli.bac} alt={peli.titulo} />
        </div>
    )
}
