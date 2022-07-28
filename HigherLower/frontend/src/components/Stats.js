import React, {useEffect, useState}  from 'react';
import { API_BASE } from '../variables';
import { Container, Table } from "react-bootstrap";
import  { useAuth0 } from "@auth0/auth0-react";

function Stats() {
  const [scores, setScores] = useState();
  const [highScore, setHighScore] = useState();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {

    if (isAuthenticated) {
      fetch(API_BASE + "Score/" + user.email)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setScores(data);
      });
    }

    fetch(API_BASE + "Score")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setHighScore(data);
    });    

  });

  return (
    <Container id="stats">
      <br></br>
      {highScore && <h3>High Score: {highScore.scoreCount} - {highScore.email}</h3> }

      <br></br>
      {scores && ( 
        <>
        <h4>Your High Score: {Math.max(...scores.map(score => parseInt(score.scoreCount)))}</h4>
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
        </>
      )}
    </Container>
  )
}

export default Stats