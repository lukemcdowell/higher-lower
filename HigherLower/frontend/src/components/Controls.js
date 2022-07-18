import React from 'react';
import { Button } from "react-bootstrap";

function Controls({handleClick}) {
    return (
        <>
            <Button variant="success" onClick={(e) => handleClick(e)}>Higher</Button>
            <Button variant="danger" onClick={(e) => handleClick(e)}>Lower</Button>
        </>
    )
}

export default Controls