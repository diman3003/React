import React, {useState} from "react";
import { Button } from 'reactstrap';
import AddMovie from './AddMovie/AddMovie.jsx'
import Modal from 'react-modal'
import Image from "../img/MoviesTop.png"

Modal.setAppElement("#root");

const Custom = {
    content: {
      top: '50%',
      left: '50%',
      right: '50%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    color: 'red'
  };

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
                    <Button outline color="danger" onClick={toggleModal}><b>+ ADD MOVIE</b></Button>
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
        <Modal isOpen={isOpen} onRequestClose={toggleModal} style={Custom}>
           <AddMovie />
        </Modal>
    </div>)
}