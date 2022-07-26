import React, {useEffect, useState}  from 'react';
import { API_BASE } from '../variables';

function Stats() {
  const [scores, setScores] = useState();

  useEffect(() => {
    fetch(API_BASE + "Score/2")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setScores(data);
    });

  }, []);

  return (
    <div id="stats">
      {scores && scores.map((score) => (
        <div className="score" key={score.Id}>
          <p>{score.Score}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats