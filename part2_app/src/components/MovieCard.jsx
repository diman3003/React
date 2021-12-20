import React, {useState} from "react";
import PropTypes from "prop-types";
import { Button, ListGroup, ListGroupItem, Input, Label } from "reactstrap";
import Modal from 'react-modal'
import Popup from 'reactjs-popup';
import $ from 'jquery';

export default function MovieCard(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [x, setx] = useState(10);
    const [y, sety] = useState(10);


    function beforeToggleModal()
    {
        setx(100);
        sety(100);
        $('.Actions').offset({top: 10, left: 10});
        toggleModal();
    }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function toggleEdit(val)
    {
        setIsOpen(false);
        setIsEditOpen(val);
    }

    function toggleDelete(val)
    {
        setIsOpen(false);
        setIsDeleteOpen(val);
    }

    function Onclik(name)
    {
        alert("123");
    }

    return(
        <div className="MovieCard">
            <table>
            <tbody>
                <tr style={{align: 'right'}}><td></td>
                <td  width='10%'>
                <Button id='act' onClick={beforeToggleModal}>...</Button>
                </td></tr>
                <tr>
                <td colSpan='2'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                </td>
                </tr>
            </tbody>
            </table>
            <Modal className="Actions" isOpen={isOpen}>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td width='10%'>
                            <Button className='CloseButton' color='gray' onClick={toggleModal}>X</Button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <ListGroup>
                                <ListGroupItem id='Ed' onClick={() => toggleEdit(true)} onMouseEnter={() => $('#Ed').css('background-color', 'red')} onMouseLeave={() => $('#Ed').css('background-color', 'gray')} style={{backgroundColor: 'gray'}} value="Edit">EDIT</ListGroupItem>
                                <ListGroupItem id='De' onClick={() => toggleDelete(true)} onMouseEnter={() => $('#De').css('background-color', 'red')} onMouseLeave={() => $('#De').css('background-color', 'gray')} style={{backgroundColor: 'gray'}} value="Delete">DELETE</ListGroupItem>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </table>
            </Modal>
            <Modal className="AddMovieModal" isOpen={isEditOpen}>
                <div className="CloseButton" >
                    <Button outline color="black" style={{color: "white"}} onClick={() => toggleEdit(false)}><h2>X</h2></Button>
                </div>
                <h1>EDIT MOVIE</h1>
                <Label>TITLE</Label>
                <Input placeholder="Title" className="MovieInput"></Input>
                <Label>RELEASE DATE</Label>
                <Input placeholder="Select Date" type="date" className="MovieInput"></Input>
                <Label>MOVIE URL</Label>
                <Input placeholder="Movie URL" className="MovieInput"></Input>
                <Label>GENRE</Label>
                <Input placeholder="Select Genre" className="MovieInput"></Input>
                <Label>OVERVIEW</Label>
                <Input placeholder="Overview" className="MovieInput"></Input>
                <Label>RUNTIME</Label>
                <Input placeholder="Runtime" className="MovieInput"></Input>
                <div className="Footer">
                    <Button outline color="danger">Reset</Button> <Button color="danger">Save</Button>
                </div>
            </Modal>
            <Modal className="AddMovieModal" isOpen={isDeleteOpen}>
                <div className="CloseButton" >
                    <Button outline color="black" style={{color: "white"}} onClick={() => toggleDelete(false)}><h2>X</h2></Button>
                </div>
                <h1>DELETE MOVIE</h1>
                <Label>Are you sure you want to delete movie?</Label>
                <div className="Footer">
                    <Button color="danger">Confirm</Button>
                </div>
            </Modal>
        </div>
    )
}

MovieCard.defaultProps = {
    title: 'Default title',
    description: 'Default description'
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
