import React, {useState} from "react";
import { Button } from 'reactstrap';
import AddMovie from './AddMovie/AddMovie.jsx'
import Modal from 'react-modal'
import Image from "../img/MoviesTop.png"

Modal.setAppElement("#root");



export default function ARR() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
    setIsOpen(!isOpen);
    }

    return(
    <div className="ARR">
        <table className="HeaderTable" style={{height: '300px', width: '100%'}}>
            <thead>
            <tr>
                <td width="100px"></td>
                <td width="80%"></td>
                <td width="200px">
                    <Button className="CloseButton" outline color="danger" onClick={toggleModal} style={{color: "white"}}><b>+ ADD MOVIE</b></Button>
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
        <Modal id="Add" className="AddMovieModal" isOpen={isOpen} onRequestClose={toggleModal}>
           <AddMovie />
        </Modal>
    </div>)
}