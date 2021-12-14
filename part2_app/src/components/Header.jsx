import React from "react";
import { Button } from 'reactstrap';
import AddMovie from './AddMovie/AddMovie.jsx'
import Image from "../img/MoviesTop.png"

export default () => (
    <div style={{ backgroundImage: "url(${Image})"}}>
        <table className="HeaderTable" style={{height: '300px', width: '100%'}}>
            <thead>
            <tr>
                <td width="100px"></td>
                <td width="80%"></td>
                <td width="200px">
                    <Button outline color="danger" onClick={render(<AddMovie />)}><b>+ ADD MOVIE</b></Button>
                </td>
            </tr>
            <tr style={{ verticalAlign: 'bottom'}}>
                <td width="100px"></td>
                <td><h1>FIND YOUR MOVIE</h1></td>
                <td width="200px"></td>
            </tr>
            <tr style={{ verticalAlign: 'top'}}>
                <td width="100px"></td>
                <td><input className="SearchInput" /> <Button className="SearchButton" color="danger">SEARCH</Button></td>
                <td width="200px"></td>
            </tr>
            </thead>
        </table>
    </div>
)