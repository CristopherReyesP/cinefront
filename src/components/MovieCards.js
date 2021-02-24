import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';
import { scrollToBottomAnimated } from '../components/scrollToBottom';
import '../css/movieCards.css';

export const MovieCards = () => {
    const { pelis, setPeliculaSeleccionada } = useContext(PeliculasContext);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const enviarPeli = (p) => {
        setPeliculaSeleccionada({
            id: p.id,
            titulo: p.titulo,
            overview: p.overview,
            promedio: p.promedio,
            lanzamiento: p.lanzamiento,
            img: `${baseUrl}${p.img}`,
            bac:`${baseUrl}${p.bac}`,
        })
        scrollToBottomAnimated('scrollAnimated');
    }

    return (
        <div className="fila" >
            {pelis.map((p) => (
                <div key={p.id} >
                    <img
                        className="peli_poster"
                        onClick={ () => enviarPeli(p)}
                        src={`${baseUrl}${p.img}`} alt={p.titulo} />      
                </div>
            ))}
        </div>
    )
}
