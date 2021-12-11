import React from "react";
import { Button } from 'reactstrap';    

export default () =>(
    <div style={{marginLeft: '100px', marginBottom: '20px', background: 'gray'}}>
        <input className="SearchInput" /> <Button style={{width: '150px', background: 'red', color: 'white'}} color="primary">SEARCH</Button>
    </div>
)