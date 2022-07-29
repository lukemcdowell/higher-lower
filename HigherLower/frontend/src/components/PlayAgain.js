import React from 'react';
import { Button } from "react-bootstrap";

//displays to the user if their guess was correct or not and a play again button
function PlayAgain(props) {
  return (
    <>
        <h4>Your guess was {props.guessResult}</h4>
        <Button variant="primary" onClick={props.handlePlayAgain}>Play Again</Button>
    </>
  )
}

export default PlayAgain