import React from 'react';
import { Button } from 'react-bootstrap';

//displays game over popup on screen
function GameOver(props) {

  return (
    <>
    <div className="popup">
        <div className="overlay">
            <div className="popup-content">
                <h1>Game Over</h1>
                <h4>Your score was: {props.score} </h4>
                <Button 
                className="close-popup"
                onClick={props.newGame}
                >New Game</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default GameOver