import React, { useEffect, useState } from 'react'
import { fetchtrending } from '../helpers/fetch';
import '../css/movieCards.css';

export const MovieCards = () => {

    const [pelis, setPelis] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        const imprimir = async () => {
            const { results } = await fetchtrending();
            console.log(results)
            const peliculas = results.map(r => (
                {
                    id: r.id,
                    titulo: r.title,
                    overview: r.overview,
                    img: r.poster_path
                }
            ));
            setPelis(peliculas);

        }
        imprimir();
    }, []);

    console.log(pelis)
    return (
        <div className="fila">

            {pelis.map((p) => (
            <div key={p.id}>
 {/*                <h3>{p.titulo}</h3>
                <p>{p.overview}</p> */}
                <img
                    className="peli_poster"
                    src={`${baseUrl}${p.img}`} alt={p.titulo} />

            </div>
        ))}
        </div>
    )
}
