import React from 'react';

//displays card to be guessed on screen
export default function GuessCard() {
    const guessUrl = "/images/backs/guess_card.svg";
    return (
        <>
          <img className="card" src={guessUrl} alt={"Back of a playing card with a question mark on it"}/>
        </>
    );
}