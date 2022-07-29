import React from 'react';

//displays image of a card on screen
export default function Card({suit, rank}) {
    const imageUrl = `/images/fronts/${suit}_${rank}.svg`;
    return (
        <>
          <img className="card" src={imageUrl} alt={`${rank} of ${suit} playing card`}/>
        </>
    );
}