import React from 'react';

function Score({correct, incorrect}) {
  return (
    <>
      <div>
        <h2 className="score-title">Wins</h2>
        <h2 className="score-title">Losses</h2>
      </div>
      <div>
        <h2 className="score-count" id="wins">{correct}</h2>
        <h2 className="score-count" id="losses">{incorrect}</h2>
      </div>
    </>
  )
}

export default Score