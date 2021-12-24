import React, {Component} from "react";
import Header from "./Header.jsx";
import MoviesList from "./MoviesList.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import image from "../img/netflix.png"



class App extends React.Component {

    state = {
        movies: [
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
        ],
        app: {title: 'FIND YOUR MOVIE'}
    }

    render() {   
        const {movies, app} = this.state;
        return (
            <>
                <Header app={app} movies={movies}/>
                <ErrorBoundary>
                    <MoviesList movies={movies}/>
                </ErrorBoundary>
                <Footer>
                    <p><img src={image}/></p>
                </Footer>
            </>
        );
    }
};

export default App;