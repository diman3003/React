import React, {useState} from "react";
import { Button, Input, Label } from 'reactstrap'
import $ from 'jquery';
//import { MDBCol, MDBInput } from "mdbreact";

function close()
{
    alert(this.toggleModal);
}

class AddMovie extends React.Component
{
    render()
    {
        return(
        <>
            <div className="CloseButton" >
                <Button outline color="black" style={{color: "white"}} onClick={close}><h2>X</h2></Button>
            </div>
            <h1>ADD MOVIE</h1>
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
                <Button outline color="danger">Reset</Button> <Button color="danger">Submit</Button>
            </div>
        </>)
    }
}

export default AddMovie