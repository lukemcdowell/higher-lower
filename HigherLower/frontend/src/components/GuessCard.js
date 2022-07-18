import React from 'react';

export default function GuessCard() {
    const guessUrl = "/images/backs/guess_card.svg";
    return (
        <>
          <img class="card" src={guessUrl} alt={"Back of a playing card with a question mark on it"}/>
        </>
    );
}