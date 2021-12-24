import React from 'react'
import { Button, Label } from 'reactstrap'

function ok(movie)
{
    alert(movie.id + " has been deleted.")
}

const DeleteMovie = ({movies, closeFunc}) => {
    return(
        <>
            <div className="CloseButton" >
            <Button outline color="black" style={{color: "white"}} onClick={() => closeFunc(false)}><h2>X</h2></Button>
            </div>
            <h1>DELETE MOVIE</h1>
            <Label>Are you sure you want to delete movie?</Label>
            <div className="Footer">
                <Button color="danger" onClick={() => ok(movies)}>Confirm</Button>
            </div>
        </>
    )
}

export default DeleteMovie;