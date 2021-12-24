import React, {Component} from "react";
import { Button, Input, Label } from 'reactstrap'
import $ from 'jquery';
//import { MDBCol, MDBInput } from "mdbreact";

function ok(movies)
{
    alert(movies.id +" movie has been edited.");
}

const AddMovie = ({movies, headTitle, closeFunc}) =>
{
        return(
        <>
            <div className="CloseButton" >
                <Button outline color="black" style={{color: "white"}} onClick={() => closeFunc(false)}><h2>X</h2></Button>
            </div>
            <h1>{headTitle}</h1>
            <Label>TITLE</Label>
            <Input placeholder="Title" className="MovieInput" readOnly="false" value={movies.title}></Input>
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
                <Button outline color="danger" >Reset</Button> <Button color="danger" onClick={() => ok(movies)}>Submit</Button>
            </div>
        </>)
}

export default AddMovie