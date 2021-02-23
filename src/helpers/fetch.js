const trending = "https://api.themoviedb.org/3/trending/movie/week?api_key=996906fec15cc2d382c9daa80bdced5f&language=es"

export const fetchtrending = async() => {
    const resp = await fetch(trending);
    return resp.json();
}