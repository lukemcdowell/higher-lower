import React from 'react';

export default function BackCard() {
    const backUrl = "/images/backs/red.svg";
    return (
        <>
          <img className="card" id="deck" src={backUrl} alt={"Back of a playing card"}/>
        </>
    );
}