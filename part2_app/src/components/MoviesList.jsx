import React from 'react';
import MovieCard from './MovieCard.jsx'

let movies = [
    {
        title: "Dances with Wolves",
        description: "Western witn Kevin Costner",
        id: '123'
    },
    {
        description: "Description",
        id: "231"
    },
    {
        title: "Movie one",
        id: "321"
    },
    {
        title: "Movie two",
        id: "111"
    },
    {
        title: "Movie three",
        id: "221"
    },
    {
        title: "Movie fore",
        id: "322"
    },
    {
        title: "Movie five",
        id: "122"
    }
]

export default function MoviesList(){
    return(
        <>
            {movies.map((movies) =>(
                <MovieCard
                    title={movies.title}
                    description={movies.description}
                    key={movies.id}
                />
            ))}
        </>
    )
}