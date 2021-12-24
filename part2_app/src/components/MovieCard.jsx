import React, {useState} from "react";
import PropTypes from "prop-types";
import { Button, ListGroup, ListGroupItem, Input, Label } from "reactstrap";
import Modal from 'react-modal'
import EditMovie from './AddMovie/AddMovie.jsx'
import DeleteMovie from './DeleteMovie/DeleteMovie.jsx'
import Actions from './Actions/Actions.jsx'
import $ from 'jquery';

export default function MovieCard(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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

    return(
        <div className="MovieCard">
            <table>
            <tbody>
                <tr style={{align: 'right'}}><td></td>
                <td  width='10%'>
                <Button id='act' onClick={toggleModal}>...</Button>
                </td></tr>
                <tr>
                <td colSpan='2'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.id}</p>
                </td>
                </tr>
            </tbody>
            </table>
            <Modal className="Actions" isOpen={isOpen} >
                <Actions closeFunc={toggleModal} toggleEdit={toggleEdit} toggleDelete={toggleDelete}/>
            </Modal>
            <Modal className="AddMovieModal" isOpen={isEditOpen}>
                <EditMovie movies={props} headTitle="EDIT MOVIE" closeFunc={toggleEdit}/>
            </Modal>
            <Modal className="AddMovieModal" isOpen={isDeleteOpen}>
                <DeleteMovie movies={props} closeFunc={toggleDelete}/>
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
