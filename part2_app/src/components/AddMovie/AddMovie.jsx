import React from 'react'
import { Button, Input, Label } from 'reactstrap'
import { MDBCol, MDBInput } from "mdbreact";

class AddMovie extends React.Component
{
    render()
    {
        return(
        <>
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
            <Button outline color="danger">Reset</Button> <Button color="danger">Submit</Button>
        </>)
    }
}

export default AddMovie