import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import $ from 'jquery';

const Actions = ({closeFunc, toggleEdit, toggleDelete}) =>
{
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td></td>
                    <td width='10%'>
                        <Button className='CloseButton' color='gray' onClick={() => closeFunc()}>X</Button>
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
        </>
    );
}

export default Actions;