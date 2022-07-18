import React from 'react';
import { Button } from "react-bootstrap";

function Score({correct, incorrect}) {
  return (
    <h2>Wins: {correct} Losses: {incorrect}</h2>
  )
}

export default Score