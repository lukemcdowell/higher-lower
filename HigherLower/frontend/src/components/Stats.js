import React, {useEffect, useState}  from 'react';
import { API_BASE } from '../variables';
import { Container, Table } from "react-bootstrap";

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
    <Container id="stats">
      <br></br>
      {scores && <h3>High Score: {Math.max(...scores.map(score => parseInt(score.scoreCount)))}</h3>}

      <br></br>
      <h4>Previous Scores</h4>
      <Table id="scores" striped bordered >
        <thead>
          <tr>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores && scores.map((score) => (
            <tr key={score.id}>
              <td>{score.scoreCount}</td>
              <td>{new Date(score.time).toLocaleString()}</td>
            </tr>

          ))}
        </tbody>
      </Table>

    </Container>
  )
}

export default Stats