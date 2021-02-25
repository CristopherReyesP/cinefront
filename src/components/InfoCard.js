import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PeliculasContext } from '../context/PeliculasContext';
import '../css/infocard.css';

export const InfoCard = () => {
    const { peliculaSeleccionada: peli } = useContext(PeliculasContext);
    return (
        <div className="infoContainer" >
            <div className="posterContainer">
                <img className="poster" src={peli.img} alt={peli.titulo} />
            </div>
            <div className="informacion">
                <h1>{peli.titulo}</h1>
                {(peli.lanzamiento === "1")
                    ?
                    <></>
                    :
                    <>
                        <h3>Fecha de lanzamiento: {peli.lanzamiento}</h3>
                        <br />
                        <p>{peli.overview}</p>
                        <Link
                            className="btn btn-info"
                            to='/asientos'
                        >Conseguir Ticket</Link>
                    </>
                }
            </div>
            <img className="imagenFondo" src={peli.bac} alt={peli.titulo} />
        </div>
    )
}
