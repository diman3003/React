import React from 'react';
import MovieCard from './MovieCard.jsx'
import Modal from 'react-modal'


export default function MoviesList({movies}){
    return(
        <>
            {movies.map((movies) =>(
                <MovieCard
                    title={movies.title}
                    description={movies.description}
                    key={movies.id}
                    id={movies.id}
                />
            ))}
        </>
    )
}