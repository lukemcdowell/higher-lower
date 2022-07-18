import React from 'react';
import { Button } from "react-bootstrap";

function Controls({handleClick}) {
    return (
        <>
            <Button id="higher" variant="success" onClick={(e) => handleClick(e)}>Higher</Button>
            <Button id="lower" variant="danger" onClick={(e) => handleClick(e)}>Lower</Button>
        </>
    )
}

export default Controls