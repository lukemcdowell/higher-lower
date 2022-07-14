import React from 'react';

export default function BackCard() {
    const backUrl = "/images/backs/red.svg";
    return (
        <>
          <img src={backUrl} alt={"Back of playing card"}/>
        </>
    );
}