import React from "react";
import Header from "./Header.jsx";
import MoviesList from "./MoviesList.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import image from "../img/netflix.png"

const App = () => {
    return (
        <>
            <Header/>
            <ErrorBoundary>
                <MoviesList/>
            </ErrorBoundary>
            <Footer>
                <p><img src={image}/></p>
            </Footer>
        </>
    );
};

export default App;