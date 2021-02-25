import React from 'react'
import { InfoCard } from '../components/InfoCard';
import { MovieCards } from '../components/MovieCards';
import { Nav } from '../components/Nav';

export const Home = () => {
    return (
        <>
            <Nav />
            <MovieCards />
            <InfoCard />
        </>
    )
}
