import React from 'react';

export default function Card({suit, rank}) {
    const imageUrl = `/images/fronts/${suit}_${rank}.svg`;
    return (
        <>
          <img className="card" src={imageUrl} alt={`${rank} of ${suit} playing card`}/>
        </>
    );
}