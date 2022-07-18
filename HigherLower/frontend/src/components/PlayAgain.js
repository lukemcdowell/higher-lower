import React from 'react';
import { Button } from "react-bootstrap";


function PlayAgain(props) {
  return (
    <>
        <h4>Your guess was {props.guessResult}</h4>
        <Button variant="primary" onClick={props.handlePlayAgain}>Play Again</Button>
    </>
  )
}

export default PlayAgain